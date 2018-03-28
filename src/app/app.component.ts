import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//登陆
import { LoginPage } from '../pages/login/login';


//储存
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  //默认跳转页面  可以改成登录页面
  
  //rootPage:any = TabsPage;
  //储存状态
  rootPage:any = !localStorage.getItem("loginStorageLocalStorage")?LoginPage:TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage:Storage) {
    this.storage.get('loginStorage').then((val) => {
      console.log('Your age is', val);
      if(val){
          //alert('已经登陆')
      }else{
          //alert('没有登录')
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      statusBar.overlaysWebView(false);
    // set status bar to white
    //写到这里面
      //statusBar.backgroundColorByHexString('#33000000');//后两位透明色 沉浸式
      statusBar.backgroundColorByHexString('#888888');//后两位透明色
    });
  }
}
