import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { CampervanComponent } from './campervan/campervan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';

const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent,
    }, {
        path: 'Help',
        component: HelpComponent,
        data: { title: 'Help' },
    }, {
        path: '',
        component: HomeComponent,
        data: { title: 'JAM' },
    }, {
        path: 'Dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        data: { title: 'Dashboard' },
    }, {
        path: 'Campervan',
        canActivate: [AuthGuard],
        component: CampervanComponent,
        data: { title: 'Campervan' },
    }, {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' },
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
