import { Component, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import portfolio from '../../../data/portfolio.json';
import { Portfolio } from '../../../Models/Portfolio';

@Component({
  selector: 'app-portfolio-list-new',
  templateUrl: './portfolio-list-new.component.html',
  styleUrls: ['./portfolio-list-new.component.css']
})
export class PortfolioListNewComponent implements AfterViewInit {
  portfolioData: Portfolio[] = portfolio;

  customOptions: OwlOptions = {};

  ngAfterViewInit(): void {
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 500,
      autoplayTimeout: 4000,
      autoplay: true,
      autoplayHoverPause: true,
      margin: 30,
      responsive: {
        0: {
          items: 1 
        },
        400: {
          items: 2
        },
        760: {
          items: 3
        },
        1000: {
          items: 3
        }
      },
      nav: false
    }
  }
}
