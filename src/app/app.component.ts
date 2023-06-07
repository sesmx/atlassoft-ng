import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

declare const scrollMenu: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'atlassoft-ng';

  constructor(private routeReuse: RouteReuseStrategy) { }

  ngOnInit(): void {
    this.routeReuse.shouldReuseRoute = () => false;
    scrollMenu();
  }
}
