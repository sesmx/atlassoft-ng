import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '../../../models/Breadcrumb';

@Component({
  selector: 'app-navigation-map',
  templateUrl: './navigation-map.component.html',
  styleUrls: ['./navigation-map.component.css']
})
export class NavigationMapComponent {
  @Input() middleNavs: Breadcrumb[] | undefined;
  currentRouteName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.currentRouteName = routerItem['data']?.['title'];
      } else if (this.route.snapshot.paramMap.get('id') !== undefined && this.route.snapshot.paramMap.get('id') !== null && !routerItem['data']?.['includeNav']) {
        console.log("pocha", routerItem['data']);
        this.currentRouteName = this.currentRouteName === '' ? routerItem['data']?.['title'] : this.currentRouteName;
      }
    });
  }
}
