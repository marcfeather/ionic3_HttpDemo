import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';

//储存
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
  }
  //要进来了的那一刻
  ionViewWillEnter() {
    console.log('ionViewDidLoad LoginPage');
    //this.storage.set('loginStorage', true);
    setTimeout(()=>{
      console.log('开始打印登陆状态');
      this.storage.get('loginStorage').then((val) => {
        console.log('Your age is', val);
        if(val){
          //this.navCtrl.push(TabsPage);
        }
      });
    },0)
  }
  
  loginStateGoHome(){
    
    this.storage.set('loginStorage', true);
    window.localStorage.setItem('loginStorageLocalStorage','true');
    this.navCtrl.push(TabsPage);
  }


  

}
