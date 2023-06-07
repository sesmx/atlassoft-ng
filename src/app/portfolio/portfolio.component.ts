import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Portfolio } from '../../models/Portfolio';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonService } from '../services/common.service';
import { Common } from 'src/models/Common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioData!: Portfolio[];

  constructor(private titleService: Title, private router: Router, private portfolioService: PortfolioService, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.commonService.getById().subscribe((data: Common) => {
          this.titleService.setTitle(`${routerItem['data']?.['title']} - ${data.orgName}`);
        });
      }
    });
  }

  ngOnInit(): void {
    this.portfolioService.getAll().subscribe((data: Portfolio[]) => {
      this.portfolioData = data;
    });
  }
}
