import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoPage1Page } from './demo-page1';

@NgModule({
  declarations: [
    DemoPage1Page,
  ],
  imports: [
    IonicPageModule.forChild(DemoPage1Page),
  ],
})
export class DemoPage1PageModule {}
