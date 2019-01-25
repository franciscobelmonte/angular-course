import { Routes, RouterModule } from '@angular/router';

import { PhotosComponent } from './components/photos/photos.component';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
    { path: 'photos', component: PhotosComponent },
    { path: 'loading', component: LoadingComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'photos' },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
