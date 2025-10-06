import { Routes } from '@angular/router';
import { VerticalLayoutComponent } from './core/components/vertical-layout/vertical-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CalendaComponent } from './features/apps/calendar/calendar.component';
import { LoginComponent } from './features/auth/auth/login/login.component';
import { RegisterComponent } from './features/auth/auth/register/register.component';
import { ForgotPasswordComponent } from './features/auth/auth/forgot-password/forgot-password.component';
import { CoursesComponent } from './features/courses/courses.component';
import { PagesCoursesComponent } from './features/courses/components/pages-courses/pages-courses.component';
import { LessonPageComponent } from './features/courses/components/pages-courses/lesson-page/lesson-page.component';
import { authGuard } from './core/guards/auth.guard';
import { SettingsComponent } from './features/settings/settings.component';
import { UserSettignsComponent } from './features/settings/components/side-rigth/components/user-settigns/user-settigns.component';
import { UserPerfilComponent } from './features/settings/components/side-rigth/components/user-perfil/user-perfil.component';
import { UserNotificationComponent } from './features/settings/components/side-rigth/components/user-notification/user-notification.component';

export const routes: Routes = [
    {
        path: '',
        component: VerticalLayoutComponent,
        canActivate: [authGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'courses' , component: CoursesComponent},
            {path: 'cursos/:slug', component: PagesCoursesComponent},
            {path: 'cursos/:slug/lesson/:lessonId', component: LessonPageComponent},
            {path: 'Calendario', component: CalendaComponent},
            {
                path: 'Settings', 
                component: SettingsComponent,
                children: [
                    {path: '', redirectTo: 'Perfil', pathMatch: 'full' }, 
                    {path: 'Account', component: UserSettignsComponent},
                    {path: 'Perfil', component: UserPerfilComponent },
                    {path: 'Notification', component: UserNotificationComponent },
                ]
            }
        ]
    },

    {
        path: 'Login',
        component: LoginComponent,
    },
    {
        path: "registration",
        component: RegisterComponent,
    },
    {
        path: "Forgout-Passoword",
        component: ForgotPasswordComponent,
    }
];
