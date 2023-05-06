import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationError, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { PortfolioService } from '../../services/portfolio.service';
import { LocationService } from '../../services/location.service';
import { SocialService } from '../../services/social.service';
import { Location } from '../../../models/Location';
import { Social } from '../../../models/Social';
import { Common } from '../../../models/Common';
import { Portfolio } from '../../../models/Portfolio';
import { RouteObject } from '../../../models/RouteObject';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent implements OnInit {
  isFooterNavVisible: boolean = false;
  locations!: Location[];
  socials!: Social[];
  startyear!: string;
  currentyear: string = new Date().getFullYear().toString();
  supportmail!: string;
  portfolioData!: Portfolio[];
  routeArray: RouteObject[] = [];
  menueItems: RouteObject[] = [];
  supportItems: RouteObject[] = [];

  constructor(private router: Router, private portfolioService: PortfolioService, private locationService: LocationService, private socialService: SocialService, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      this.routeArray.push({
        routeTitle: routerItem['data']?.['title'],
        routePath: `/${routerItem['path']}` || '/',
        includeInNav: routerItem['data']?.['includeNav'],
        isSupport: routerItem['data']?.['isSupport']
      });
    });

    this.supportItems = this.routeArray.filter(r => r.isSupport);
    this.menueItems = this.routeArray.filter(r => !r.isSupport);

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/error') {
          this.isFooterNavVisible = false;
        } else {
          this.isFooterNavVisible = true;
        }
      }
      if (event instanceof NavigationError) {
        if (this.router.url === '/error') {
          this.isFooterNavVisible = false;
        } else {
          this.isFooterNavVisible = true;
          console.log(event.error);
        }
      }
    });
  }

  ngOnInit(): void {
    this.commonService.getById().subscribe((data: Common) => {
      this.startyear = data.orgStartYear;
      this.supportmail = data.supportEmail;
    });

    this.portfolioService.getAll().subscribe((data: Portfolio[]) => {
      this.portfolioData = data;
    });

    this.locationService.getAll().subscribe((data: Location[]) => {
      this.locations = data;
    });

    this.socialService.getAll().subscribe((data: Social[]) => {
      this.socials = data;
    });
  }
}
