import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import Page components
import { TabsPage } from '../pages/tabs/tabs';
import { PendingPage } from '../pages/pending/pending.component';
import { CompletedPage } from '../pages/completed/completed.component';
import { AddListPage } from '../pages/add-list/add-list.component';

// Import services
import { TodoService } from '../services/todo.service';

// Import pipes
import { FilterCompletedPipe } from '../pipes/filter-completed/filter-completed';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingPage,
    CompletedPage,
    AddListPage,
    FilterCompletedPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingPage,
    CompletedPage,
    AddListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
