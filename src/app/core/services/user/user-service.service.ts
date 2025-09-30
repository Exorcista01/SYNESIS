// Caminho do arquivo: src/app/core/services/user/user-service.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

type ProgressMap = Map<string, Set<number>>;

@Injectable({
  providedIn: 'root'
})
export class UserProgressService {
  private progressData$ = new BehaviorSubject<ProgressMap>(this.loadProgress());
  private recentCourseSlug$ = new BehaviorSubject<string | null>(this.getInitialRecentSlug());

  constructor(private cursosService: CursosService) { }

  toggleLessonComplete(courseSlug: string, lessonId: number): void {
    const currentProgress = this.progressData$.getValue();
    if (!currentProgress.has(courseSlug)) {
      currentProgress.set(courseSlug, new Set<number>());
    }

    const courseLessons = currentProgress.get(courseSlug)!;
    if (courseLessons.has(lessonId)) {
      courseLessons.delete(lessonId);
    } else {
      courseLessons.add(lessonId);
    }

    this.progressData$.next(currentProgress);
    this.saveProgress(currentProgress);
    this.setRecentCourse(courseSlug);
  }

  getCourseProgress(courseSlug: string): Observable<number> {
    return this.progressData$.pipe(
      map(progressMap => {
        const totalLessons = this.cursosService.getTotalLessons(courseSlug);
        if (totalLessons === 0) return 0;
        const completedLessons = progressMap.get(courseSlug)?.size || 0;
        return Math.round((completedLessons / totalLessons) * 100);
      })
    );
  }

  getCompletedLessons(courseSlug: string): Observable<Set<number>> {
    return this.progressData$.pipe(
      map(progressMap => progressMap.get(courseSlug) || new Set<number>()) // Correção crucial está aqui
    );
  }

  getRecentCourseSlug(): Observable<string | null> {
    return this.recentCourseSlug$.asObservable();
  }

  setRecentCourse(slug: string): void {
    localStorage.setItem('recentCourseSlug', slug);
    this.recentCourseSlug$.next(slug);
  }

  private getInitialRecentSlug(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('recentCourseSlug') : null;
  }

  private saveProgress(progress: ProgressMap): void {
    const serializable = Array.from(progress.entries()).map(([slug, lessonSet]) => {
      return [slug, Array.from(lessonSet)];
    });
    localStorage.setItem('userProgress', JSON.stringify(serializable));
  }

  private loadProgress(): ProgressMap {
    if (typeof window === 'undefined') return new Map();
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress) as [string, number[]][];
      const progressMap = new Map<string, Set<number>>();
      parsed.forEach(([slug, lessonArray]) => {
        progressMap.set(slug, new Set(lessonArray));
      });
      return progressMap;
    }
    return new Map();
  }
}