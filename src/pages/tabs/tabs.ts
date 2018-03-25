import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { DemoPage1Page } from '../demo-page1/demo-page1';

import { StatusBar } from '@ionic-native/status-bar';
import {Platform,App,ToastController} from 'ionic-angular';

//AboutNestingTabsPage 
import { AboutNestingTabsPage } from '../../pages/about-nesting-tabs/about-nesting-tabs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab2RootVal = AboutNestingTabsPage;
  tab3Root = ContactPage;
  tab4Root = DemoPage1Page;



  constructor(public statusBar: StatusBar,public plt: Platform,private toastCtrl: ToastController,private app:App,public navCtrl: NavController) {
    let  tabs3=document.getElementsByClassName('tab-button')[2];
    // tabs3.addEventListener=()=>{
    //       console.log('test');
    // }
    console.log(tabs3);
  }
  
  

  //生命周期
  ionViewDidEnter(){
    
  }


  //用ionic自己的生命周期函数构造器
  ngOnInit(){





    //点击后退
    this.plt.registerBackButtonAction(()=>{
      this.goBackLogic();
      console.log('监听右键Boolean值：' + this.checkPage)
      
      if (this.checkPage) {
        //如果是根目则按照需求1处理
        this.exitApp();
      } else {
        //非根目录返回上一级页面
        this.app.goBack();
      }
    },10);




  }



  // 全局变量
  private checkPage;
  // 判断当前是否是tabs主页面
  goBackLogic(){
    var currentCmp = this.app.getActiveNav().getActive().component
    var isPage1= currentCmp === HomePage;
    var isPage2= currentCmp === AboutPage;
    var isPage3= currentCmp === ContactPage;
    var isPage4= currentCmp === DemoPage1Page;

    if (isPage1 || isPage2 || isPage3 || isPage4) {
      this.checkPage = true
    } else {
      this.checkPage = false
    }
  }





  //toast事件
  private registerBackButton;
  exitApp () {
    if (this.registerBackButton) {
      this.plt.exitApp();
    } else {
      this.registerBackButton = true;
      this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'middle',
        cssClass: 'toast-black'
      }).present();
      setTimeout(() => this.registerBackButton = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
    }
  }


  //点击推荐
  AboutPageClick(){
      //this.navCtrl.push(AboutNestingTabsPage);
      console.log('test');
  }

  


}
