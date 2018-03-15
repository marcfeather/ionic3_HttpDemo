import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public serveProvider:ServeProvider) {
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
  getStartHTTPDataObj={
     key:'2612c5cc42c4408bbc1dbc1f7e7b73f0',
     info:'你好啊',
  }
 
   params = new HttpParams().set('key', '2612c5cc42c4408bbc1dbc1f7e7b73f0').set('info', '你的名字叫什么');
  
  getStartHTTPData(){
    console.log(this.getStartHTTPDataObj);
    
      console.log('test');
      this.serveProvider.rxjsPostRequestInterface(this.getStartHTTPDataObj)
      .subscribe(value=>{
          console.log(value);
          alert(JSON.stringify(value));
      },error=>{
          alert('失败回调')
          console.log('失败回调');
      })
  }

}
