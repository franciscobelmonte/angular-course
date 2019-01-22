import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { EditMapComponent } from './components/map/edit-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EditMapComponent
  ],
  entryComponents: [
    EditMapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLxFw7FUyRVqJ-ZXwZ7YlOTABxFRp418k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
