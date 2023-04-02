import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationError, Router } from '@angular/router';
import common from '../../../data/common.json';
import portfolio from '../../../data/portfolio.json';
import { Location } from '../../../models/Location';
import { Social } from '../../../models/Social';
import { Portfolio } from '../../../models/Portfolio';
import { RouteObject } from '../../../models/RouteObject';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent {
  isFooterNavVisible: boolean = false;
  locations: Location[] = common.locations;
  socials: Social[] = common.social;
  startyear: string = common.orgStartYear;
  currentyear: string = new Date().getFullYear().toString();
  supportmail: string = common.supportEmail;
  portfolioData: Portfolio[] = portfolio;
  routeArray: RouteObject[] = [];
  menueItems: RouteObject[] = [];
  supportItems: RouteObject[] = [];

  constructor(private router: Router) {
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
}
