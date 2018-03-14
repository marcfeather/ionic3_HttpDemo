import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//数据请求模块
import { HttpClientModule ,HttpClientJsonpModule} from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DemoPage1Page } from '../pages/demo-page1/demo-page1';

import { HomeListValPage } from '../pages/home-list-val/home-list-val';
import { HomeListValDetailsPage } from '../pages/home-list-val-details/home-list-val-details';





import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//服务
import { ServeProvider } from '../providers/serve/serve';











@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage1Page,
    TabsPage,
    HomeListValPage,
    HomeListValDetailsPage,
    
    

  ],
  imports: [
    BrowserModule,

    IonicModule.forRoot(MyApp,{
      backButtonText: '',//按钮内容
      backButtonIcon: 'ios-arrow-back',//按钮图标样式
      pageTransition: 'md-transitionmd-transition',//页面切换动画
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: 'true',        //隐藏全部子页面tabs

    }),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage1Page,
    TabsPage,
    HomeListValPage,
    HomeListValDetailsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServeProvider,
    HttpClientModule,
    HttpClientJsonpModule,
  ]
})
export class AppModule {}
