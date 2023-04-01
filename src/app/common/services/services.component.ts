import { Component, OnInit } from '@angular/core';

declare const generatedJs: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  ngOnInit(): void {
    generatedJs();
  }
}
