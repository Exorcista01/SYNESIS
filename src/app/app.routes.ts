import { Routes } from '@angular/router';
import { VerticalLayoutComponent } from './core/components/vertical-layout/vertical-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CalendaComponent } from './features/apps/calendar/calendar.component';
import { LoginComponent } from './features/auth/auth/login/login.component';
import { RegisterComponent } from './features/auth/auth/register/register.component';
import { ForgotPasswordComponent } from './features/auth/auth/forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        path: '',
        component: VerticalLayoutComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'Calendario', component: CalendaComponent}
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
