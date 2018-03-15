import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomeListValDetailsPage } from '../home-list-val-details/home-list-val-details';

//服务
import { ServeProvider } from "../../providers/serve/serve";
import { HttpParams} from '@angular/common/http';

/**
 * Generated class for the HomeListValPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-list-val',
  templateUrl: 'home-list-val.html',
})
export class HomeListValPage {
  //inpit 值
  //@Input()
  inpitVal:string;
  RobotReply=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public serveProvider:ServeProvider){
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad HomeListValPage');
    
  }

  stateGoDetails(){
    this.navCtrl.push(HomeListValDetailsPage, {
          id : "test" //传值
    });
  }

  //请求接口
  private params = new HttpParams().set('key', '2612c5cc42c4408bbc1dbc1f7e7b73f0').set('info', '你的名字叫什么');
  myData(){
    return (new Date())+'      ';
  }
 
  rxjsGetRequestInterfaceFun(){//get
    this.serveProvider.rxjsGetRequestInterface(this.inpitVal)
    .subscribe(value=>{
        console.log(value);
        //this.RobotReply.push(value.text);  splice(2,0,"Lemon"
         this.RobotReply.splice(0,0,(this.myData())+'  '+value.text);
        this.inpitVal='';
    },error=>{
        console.log('失败回调');
    })
  };

  

}
