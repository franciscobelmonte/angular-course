import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { LoadingComponent } from './components/loading/loading.component';

// Import routes
import { APP_ROUTES } from './app.routes';

import { environment } from '../environments/environment';
import { NgDropPhotosDirective } from './directives/ng-drop-photos.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    LoadingComponent,
    NgDropPhotosDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
