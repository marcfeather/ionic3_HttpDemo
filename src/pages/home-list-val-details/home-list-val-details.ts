import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';



/**
 * Generated class for the HomeListValDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-list-val-details',
  templateUrl: 'home-list-val-details.html',
})
export class HomeListValDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeListValDetailsPage');
  }

  //往tabs 里面跳
  stateGoHome(){
    this.navCtrl.push(TabsPage, {
      id : "test" //传值
    });
  }

  //获取数据
  getStartHTTPData(){
      console.log('test');
  }

}
