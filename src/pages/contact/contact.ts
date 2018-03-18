import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  SignOutButtonShow=false;
  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter(){
    if(localStorage.getItem('loginStorageLocalStorage')){
          this.SignOutButtonShow=true;
    }else{
          this.SignOutButtonShow=false;
    }
    
  }

  

  //退出登陆
  SignOut(){
    localStorage.removeItem('loginStorageLocalStorage');
    if(localStorage.getItem('loginStorageLocalStorage')){
      this.SignOutButtonShow=true;
      }else{
       this.SignOutButtonShow=false;
      }
  }

}
