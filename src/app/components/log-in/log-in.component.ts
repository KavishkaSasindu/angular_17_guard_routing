import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {CookieManagerService} from "../../services/cookie-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit{

  constructor(private cookieServiceManager:CookieManagerService,private router:Router) {
  }
  logInUser(form:any){
      console.log(form.value.username);
      console.log(form.value.password)

    this.cookieServiceManager.createCookie('tokenData',JSON.stringify(form.value));
      this.router.navigateByUrl('/dashboard/home');
  }

  ngOnInit() {
    if(this.cookieServiceManager.isExistCookie('tokenData')){
      this.router.navigateByUrl('/dashboard/home');
    }else{
      this.router.navigateByUrl('/login')
    }
  }
}
