import { Component } from '@angular/core';
import { NavController,Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { HomeListValPage } from '../home-list-val/home-list-val';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  //轮播控制
  @ViewChild(Slides) slides: Slides;
  // goToSlide();
  // goToSlide() {
  //   this.slides.slideTo(2, 600,true);
  // }

  //下拉刷新
  doRefresh(refresher){
    setTimeout(()=>{refresher.complete();},1600)

  }

  //tabs 切换 默认选中
  pet: string ="left";
  //tabs 切换 默认点击一个
  tbasArr=[{name:'头条',text:'left'},{name:'推荐',text:'right'}];
  ngOnInit(){

  }

  //tabs left点击
  tabsLeft(){
    //跳转页面
    this.navCtrl.push(HomeListValPage,{
      id : "test" //传值
    });

  }
  tabsRight(){
    this.navCtrl.push(HomeListValPage, {

      id : "test" //传值
    });
  }




}
