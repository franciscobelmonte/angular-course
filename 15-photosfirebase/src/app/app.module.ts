import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { LoadingComponent } from './components/loading/loading.component';

// Import routes
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
