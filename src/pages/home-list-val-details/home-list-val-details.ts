import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ActionSheetController ,AlertController,} from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';


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
  postHttpDataArr=[1,2,3,4,5,6,7,8,9];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public serveProvider:ServeProvider,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController,
  
  ) {
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
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '点击3',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },  
        {
          text: '点击4',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '点击5',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '点击6',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '点击7',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
    actionSheet.present();
    
  }

  //弹框样式2
  ionicAlert2(){
    
      let alert = this.alertCtrl.create();
      alert.setTitle('标题');
  
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
      alert.addInput({
        type: 'radio',
        label: 'Blue',
        value: 'blue',
        checked: false
      });
  
      alert.addButton('取消');
      alert.addButton({
        text: '好的',
        handler: data => {
          console.log(this);
          // this.testRadioOpen = false;
          // this.testRadioResult = data;
        }
      });
      alert.present();
    
  }
  //弹框
  ionicAlert(){
    let alert = this.alertCtrl.create({
      title: '弹框',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['好的']
    });
    alert.present();
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




  //时间选择器
//   导入import { DatePicker,DatePickerOptions } from '@ionic-native/date-picker';  
  
// 通过插件获取日期  
// DatePickerOptions的设置，可根据个人喜好，实际情况自己选择，具体参照官网。  
// getDate(){  
//     let options : DatePickerOptions ={  
//       date: new Date(),  
//       mode: 'datetime',  
//       titleText:'请选择日期',  
//       okText:'选择',  
//       cancelText: '取消',  
//       todayText:'今天',  
//       nowText: '现在',  
//       is24Hour:true,  
//       allowOldDates:true,  
//       doneButtonLabel:'确定',  
//       minuteInterval:10,  
//       androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK   
//     }  
//     this.datePicker.show(options).then(  
//       date => {  
//         console.log('Got date: ', date);  
//         alert(date.getSeconds());  
//         this.dateStr=date.getTime().toString();  
//       },  
//       err => console.log('Error occurred while getting date: ', err)  
//     );  
//   }  

}
