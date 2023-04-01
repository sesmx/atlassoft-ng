import { Component, OnInit } from '@angular/core';

declare const scrollMenu: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'atlassoft-ng';

  ngOnInit(): void {
    scrollMenu();
  }
}
