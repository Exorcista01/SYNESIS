import { Routes } from '@angular/router';
import { ExerciseComponent } from './exercise.component';
import { ExercicioDetalheComponent } from './exercicio-detalhe/exercicio-detalhe.component';



export const EXERCISE_ROUTES: Routes = [
    {
        path: '', 
        component: ExerciseComponent 
    },
    {
        path: ':id', 
        component: ExercicioDetalheComponent
    }
];
