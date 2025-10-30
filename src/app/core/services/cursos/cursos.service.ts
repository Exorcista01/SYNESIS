import { inject, Injectable } from '@angular/core';
import { Course, CardSection, Module, Lesson, CourseLevel } from '../../../features/courses/course.model';
import { map, Observable, of } from 'rxjs';
import { Firestore, collection, collectionData, doc, docData, query, where } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private firestore: Firestore = inject(Firestore);

  private coursesCollection = collection(this.firestore, 'courses');

  constructor() {}

  getAllCourses(): Observable<Course[]> {
    return collectionData(this.coursesCollection, { idField: 'id' }) as Observable<Course[]>;
  }

  getCardSections(): Observable<CardSection[]> {
    return this.getAllCourses().pipe(
      map(courses => {
        const groups = new Map<string, Course[]>();

        for (const course of courses) {
          const category = course.category || 'Outros'; 
          if (!groups.has(category)) {
            groups.set(category, []);
          }
          groups.get(category)!.push(course);
        }
        
        const sections: CardSection[] = [];
        groups.forEach((courses, title) => {
          sections.push({ title, courses });
        });

        return sections;
      })
    );
  }

  getCourseById(slug: string): Observable<Course | undefined> {
   const courseQuery = query(this.coursesCollection, where('slug', '==', slug));
  
  return collectionData(courseQuery).pipe(
    map(courses => courses.length > 0 ? courses[0] : undefined)
  ) as Observable<Course | undefined>;
  }

  

 getTotalLessons(slug: string): Observable<number> {
    return this.getCourseById(slug).pipe(
      map(course => {
        if (!course || !course.modules) {
          return 0;
        }
        return course.modules.reduce((total, module) => {
          return total + (module.lessons ? module.lessons.length : 0);
        }, 0);
      })
    );
  }

 
}