export type CourseLevel = 'Iniciante' | 'Intermediário' | 'Avançado';


export interface Lesson {
  id: number;
  title: string;
  type: 'video' | 'artigo';
  description: string;
  durationInMinutes?: number;
}


export interface Module {
  order: number;
  title: string;
  durationInHours: number;
  thumbnail: string;
  learnings?: string[];
  skills?: string[];
  lessons?: Lesson[];
}


export interface Course {
  slug: string;
  id: number;
  img: string;
  title: string;
  author: string;
  year: string;
  tags: string[];
  description: string;
  descriptionLong?: string;
  level: CourseLevel;
  modules?: Module[];
  studyHours?: number;
  totalLessons?: number;
  totalMinutes?: number;
  studentCount?: number;
  accessEndDate?: string;
  activities?: number;
}


export interface CardSection {
  title: string;
  courses: Course[];
}