import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';
import { CommonService } from '../services/common.service';
import { Common } from '../../models/Common';
import { Portfolio } from '../../models/Portfolio';
import { Breadcrumb } from 'src/models/Breadcrumb';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  selectedProfile: Portfolio | undefined;
  breadcrumbNavArray: Breadcrumb[] = [
    {
      name: 'Portfolio',
      path: '/portfolio'
    }
  ];

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute, private portfolioService: PortfolioService, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.commonService.getById().subscribe((data: Common) => {
          this.titleService.setTitle(`${routerItem['data']?.['title']} - ${data.orgName}`);
        });
      }
    });
  }

  ngOnInit(): void {
    this.portfolioService.getById(this.route.snapshot.paramMap.get('id')).subscribe((data: Portfolio) => {
      this.selectedProfile = data;
      if (this.selectedProfile === undefined || this.selectedProfile === null) {
        this.router.navigate(['/error']);
      }
    });
  }
}
