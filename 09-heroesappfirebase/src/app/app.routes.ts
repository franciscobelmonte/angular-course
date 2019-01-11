import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/heroes/hero.component';

const ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' },
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
