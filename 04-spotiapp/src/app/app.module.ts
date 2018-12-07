import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/share/loading/loading.component';

// Import routes
import { ROUTES } from './app.routes';

// Import pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { SafeDomPipe } from './pipes/safe-dom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearcherComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    SafeDomPipe,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
