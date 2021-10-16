import { Injectable } from '@angular/core';
import { urlData } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  constructor(private http:HttpClient) { }

  saveUrl(url:urlData){
    // this.userData.push(user)
    return this.http.post(`https://615dc86012571a00172078b4.mockapi.io/urlshort`,url)
  }
  getAllUrl(){
    return this.http.get<Array<urlData>>(`https://615dc86012571a00172078b4.mockapi.io/urlshort`)
  }
  getUrlByID(id?:number){
    return this.http.get<Array<urlData>>(`https://615dc86012571a00172078b4.mockapi.io/urlshort/?id=${id}`)
  }
  updateUrlById(userId:number,userdata:urlData){
    return this.http.put(`https://615dc86012571a00172078b4.mockapi.io/urlshort/${userId}`,userdata)
  }

}
