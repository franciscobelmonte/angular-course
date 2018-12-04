import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SafeDomPipe } from './pipes/safe-dom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SafeDomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
