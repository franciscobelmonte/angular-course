import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { MovieComponent } from './components/movie/movie.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearcherComponent },
    { path: 'search/:movie', component: SearcherComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
