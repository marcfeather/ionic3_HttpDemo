import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//AboutNestingTabsPage 
import { AboutNestingTabsPage } from '../../pages/about-nesting-tabs/about-nesting-tabs';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
     //let elements = document.querySelectorAll(".tabbar");
    //if (elements != null) {
       // Object.keys(elements).map((key) => {
         //   elements[key].style.display = 'none';
        //});
    //}  
  }

  


//当退出页面的时候
ionViewWillLeave() {
  // let elements = document.querySelectorAll(".tabbar");
  // if (elements != null) {
  //     Object.keys(elements).map((key) => {
  //         elements[key].style.display = 'flex';
  //     });
  // }
}  
  //生命周期事件
  ionViewWillEnter(){
    //this.navCtrl.push(AboutNestingTabsPage);
  }

}
