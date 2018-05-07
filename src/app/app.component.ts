import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLg:boolean;


  breakpointChanged(e){
    if (e.detail == 2){
      this.isLg = true; 
    } else {
      this.isLg = false; 
    }
  }
}
