import { HttpClient ,HttpHeaders,} from '@angular/common/http';
import { Injectable } from '@angular/core';

//调用接口所需

//import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map';


/*
  Generated class for the ServeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//请求头
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ServeProvider {

  constructor(public http: HttpClient,) {
    console.log('Hello ServeProvider Provider');
  }
  

  // //post 方法
  // //staffId:74
  rxjsPostRequestInterface(data:any):Observable<any>{

    return this.http   //post请求 http://218.29.141.170:8880/SmartHospitalSystem/hospitalInfo/findHospitalImage
      .post('http://www.tuling123.com/openapi/api',data,httpOptions)//this.options
      .map((res:any)=>{
        return res;
      })
      .catch((error:any)=>Observable.throw(error))
  }


  //官方文档方法
  //get
  rxjsGetRequestInterface(city:string):Observable<any>{
    console.log('test');
    return this.http  //get jsonp跨域接口
      //.get('http://apis.juhe.cn/cook/query?key=831bbbb8ee585c17d8b642730d37143a&menu=红烧',httpOptions)//this.options 请求头
      .get('http://www.tuling123.com/openapi/api?key=2612c5cc42c4408bbc1dbc1f7e7b73f0&info=讲个故事')
      .map((res:any)=>{
        return res;
      })
      .catch((error:any)=>Observable.throw(error))
   }


  

}
