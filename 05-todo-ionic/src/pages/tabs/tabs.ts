import { Component } from '@angular/core';

import { PendingPage } from '../pending/pending.component';
import { CompletedPage } from '../completed/completed.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingPage;
  tab2Root = CompletedPage;

  constructor() {

  }
}
