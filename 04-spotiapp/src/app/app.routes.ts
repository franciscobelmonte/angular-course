import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearcherComponent } from './components/searcher/searcher.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent}
    {path: 'search', component: SearcherComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];