import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeListValDetailsPage } from './home-list-val-details';

@NgModule({
  declarations: [
    HomeListValDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeListValDetailsPage),
  ],
})
export class HomeListValDetailsPageModule {}
