import {Component, Inject, OnInit, PLATFORM_ID, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {constants} from "os";
import {isPlatformBrowser} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{


}
