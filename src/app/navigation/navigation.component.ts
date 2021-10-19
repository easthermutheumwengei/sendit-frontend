import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  is_authenticated: any;

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem("userToken") != null) {
      this.is_authenticated = true
    }
  }

}
