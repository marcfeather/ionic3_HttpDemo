import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomeListValPage } from '../home-list-val/home-list-val';

import { AboutNestingTabsValPage } from '../about-nesting-tabs-val/about-nesting-tabs-val'; 
/**
 * Generated class for the AboutNestingTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-nesting-tabs',
  templateUrl: 'about-nesting-tabs.html',
})
export class AboutNestingTabsPage {
  tabsroot = AboutNestingTabsValPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutNestingTabsPage');
  }

}
