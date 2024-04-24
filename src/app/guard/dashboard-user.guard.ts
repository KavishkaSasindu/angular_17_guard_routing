import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {CookieManagerService} from "../services/cookie-manager.service";

export const dashboardUserGuard = async() => {
  const router = inject(Router);
  const cookieService = inject(CookieManagerService);

  try{
    const hasToken = await cookieService.isExistCookiePromise('tokenData');
    if(hasToken){
      return true;
    }else{
      return false;
    }
  }catch(e){
    router.navigateByUrl('/login');
    return false
  }
};
