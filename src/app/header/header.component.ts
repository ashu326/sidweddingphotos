import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showNavbar = false;

  constructor() { }

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  ngOnInit() {
  }

}
