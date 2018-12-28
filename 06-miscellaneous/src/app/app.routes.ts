import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailsUserComponent } from './components/user/details-user.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'user/:id',
        component: UserComponent,
        children: [
            { path: 'new', component: NewUserComponent },
            { path: 'edit', component: EditUserComponent },
            { path: 'details', component: DetailsUserComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'edit' }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTES = RouterModule.forRoot(routes);

