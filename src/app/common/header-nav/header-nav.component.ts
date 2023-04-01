import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
import { RouteObject } from '../../../Models/RouteObject';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  routeurl: string = '/';
  subrouteurl: string = '';
  routeArray: RouteObject[] = [];
  showLoader: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        this.showLoader = true;
      }
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.routeurl = this.router.parseUrl(event.url).toString();
        this.subrouteurl = this.route.snapshot.paramMap.get('id') ?? '';
        
        setTimeout(() => {
          this.showLoader = false;
        }, 500);
      }
      if (event instanceof NavigationError) {
        // Hide progress spinner or progress bar
        // Present error to user
        console.log(event.error);
        setTimeout(() => {
          this.showLoader = false;
        }, 500);
      }
    });
  }

  ngOnInit(): void {
    this.routeurl = this.router.parseUrl(this.router.url).toString();

    this.router.config.forEach(routerItem => {
      this.routeArray.push({
        routeTitle: routerItem['data']?.['title'],
        routePath: `/${routerItem['path']}` || '/',
        includeInNav: routerItem['data']?.['includeNav'],
        isSupport: routerItem['data']?.['isSupport']
      });
    });

    /*this.routeArray.forEach(r => {
      console.log(r.routePath, r.routePath.includes('/portfolio/'));
      console.log("includeInNav", !r.includeInNav);
    });*/
  }
}
