import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//登陆
import { LoginPage } from '../pages/login/login';


//储存
//import{ Storage } from'@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //默认跳转页面  可以改成登录页面
  
  //rootPage:any = TabsPage;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      statusBar.overlaysWebView(false);
    // set status bar to white
    //写到这里面
      statusBar.backgroundColorByHexString('#888888');
    });
  }
}
