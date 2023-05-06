import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio } from '../../../models/Portfolio';

@Component({
  selector: 'app-portfolio-list-new',
  templateUrl: './portfolio-list-new.component.html',
  styleUrls: ['./portfolio-list-new.component.css']
})
export class PortfolioListNewComponent implements OnInit, AfterViewInit {
  portfolioData!: Portfolio[];

  customOptions: OwlOptions = {};

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getAll().subscribe((data: Portfolio[]) => {
      this.portfolioData = data;
    });
  }

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
