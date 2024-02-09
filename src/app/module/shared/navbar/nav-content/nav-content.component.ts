import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from './navbarMenu';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
})
export class NavContentComponent implements OnInit {
  @Input()
  selectedSection!: string;

  category: any;

  ngOnInit() {}

  constructor(private router: Router) {
    this.category = navigation;
  }

  navigateToProducts = (path: String) => {
    this.router.navigate([path]);
  };
}
