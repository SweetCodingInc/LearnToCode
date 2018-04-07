import { Route, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const root: Route = {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
};

const LoginRoute: Route = {
    path: 'login',
    component: LoginComponent
};

const DashboardRoute: Route = {
    path: 'dashboard',
    component: DashboardComponent
};

export const routes: Routes = [
    root,
    LoginRoute,
    DashboardRoute
];
