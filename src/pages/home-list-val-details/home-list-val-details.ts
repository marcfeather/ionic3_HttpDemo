import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';
import { ActionSheetController } from 'ionic-angular';

import { HomeListValPage } from '../../pages/home-list-val/home-list-val';


//服务
import { ServeProvider } from "../../providers/serve/serve";
import { HttpParams ,} from '@angular/common/http';


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
  postHttpDataArr=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public serveProvider:ServeProvider,public actionSheetCtrl: ActionSheetController) {
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

  //连续返回首页
  histroyGoHome(){
    //返回跟模块
    this.navCtrl.popToRoot();
    //this.navCtrl.pop();
   
  }


  //ActionSheet
  ActionSheetFun(){

     let actionSheet = this.actionSheetCtrl.create({
      title: 'title',
      buttons: [
        {
          text: '点击1',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '点击2',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '点击3',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },{
          text: '点击4',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },{
          text: '点击5',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },{
          text: '点击6',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
    
  }

  //获取数据
  getStartHTTPDataObj={
     key:'2612c5cc42c4408bbc1dbc1f7e7b73f0',
     info:'讲个故事',
  }
 
   params = new HttpParams().set('key', '2612c5cc42c4408bbc1dbc1f7e7b73f0').set('info', '你的名字叫什么');
  
  getStartHTTPData(){
    console.log(this.getStartHTTPDataObj);
    
      console.log('test');
      this.serveProvider.rxjsPostRequestInterface(this.getStartHTTPDataObj)
      .subscribe(value=>{
          console.log(value);
          this.postHttpDataArr.splice(0,0,value.text);
          //alert(JSON.stringify(value));
      },error=>{
          //alert('失败回调')
          console.log('失败回调');
      })
  }

}
