import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import portfolio from '../../data/portfolio.json';
import common from '../../data/common.json';
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
  ]

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.titleService.setTitle(`${routerItem['data']?.['title']} - ${common.orgName}`);
      }
    });
  }

  ngOnInit(): void {
    this.selectedProfile = portfolio.find(o => o.id === this.route.snapshot.paramMap.get('id'));
    if (this.selectedProfile === undefined) {
      this.router.navigate(['/error']);
    }
  }
}
