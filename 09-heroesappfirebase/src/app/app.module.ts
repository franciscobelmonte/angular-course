import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/heroes/hero.component';

// Import routes
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
