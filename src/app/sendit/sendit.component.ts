import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendit',
  templateUrl: './sendit.component.html',
  styleUrls: ['./sendit.component.css']
})
export class SenditComponent implements OnInit {
  response: any;


  constructor() {
  }

  ngOnInit() {
    var referrer =  document.referrer;
    if (referrer.indexOf("logout") !== -1){
      window.location.reload()
    }
  }
}
