import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutNestingTabsPage } from './about-nesting-tabs';

@NgModule({
  declarations: [
    AboutNestingTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutNestingTabsPage),
  ],
})
export class AboutNestingTabsPageModule {}
