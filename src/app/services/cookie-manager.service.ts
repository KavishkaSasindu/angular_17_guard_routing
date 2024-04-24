import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {resolve} from "node:path";

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService:CookieService) { }

  createCookie(name:any,value:any){
    this.cookieService.set(name,value,25,'/');
  }

  isExistCookie(name:any):boolean{
    return this.cookieService.check(name);
  }

  isExistCookiePromise(name:any):Promise<boolean>{
    return new Promise((resolve,reject)=>{
      try{
        const exist = this.cookieService.check(name);
        resolve(exist);
      }catch(error){
        reject(error);
        console.log(error);
      }
    })
  }

  clearCookie(name:any){
    this.cookieService.delete(name);
  }

  clearAllCookies(name:any){
      this.cookieService.deleteAll();
  }

  findCookie(name:any):string | undefined{
    if(this.isExistCookie(name)){
      return this.cookieService.get(name);
    }else{
      return undefined;
    }
  }
}
