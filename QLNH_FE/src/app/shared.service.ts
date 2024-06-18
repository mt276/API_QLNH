import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5088/api";
  readonly ImgUrl = "http://localhost:5088/Img";

  constructor(private http:HttpClient) { }
    GetListMenu():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Menu');
    }
    PostMenu(val:any){
      return this.http.post(this.APIUrl+'/Menu',val);
    }
    PutMenu(val:any){
      return this.http.put(this.APIUrl+'/Menu',val);
    }
    DeleteMenu(val:any){      
      return this.http.delete<any>(this.APIUrl+'/Menu?MenuID='+val);
    }


    GetListMenuItem():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Menu_Item');
    }
    PostMenuItem(val:any){
      return this.http.post(this.APIUrl+'/Menu_Item',val);
    }
    PutMenuItem(val:any){
      return this.http.put(this.APIUrl+'/Menu_Item',val);
    }
    DeleteMenuItem(val:any){
      return this.http.delete<any>(this.APIUrl+'/Menu_Item?Menu_ItemID='+val);
    }
    LoadImg(val:any){
      return this.http.post(this.APIUrl+'/Menu_Item/LoadImg',val);
    }
    GetAllMenuName():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Menu_Item/GetAllMenuName');
    }

    Login(val:any):Observable<any[]>{
      
      return this.http.post<any>(this.APIUrl+'/Account',val);
    }

}
