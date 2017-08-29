import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home';
import { LeaseComponent } from './lease/lease.component';
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
        path: 'Lease',
        canActivate: [AuthGuard],
        component: LeaseComponent,
        data: { title: 'Lease' },
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' },
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
