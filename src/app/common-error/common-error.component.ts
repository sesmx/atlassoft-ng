import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import common from '../../data/common.json';

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.css']
})
export class CommonErrorComponent {
  constructor(private titleService: Title, private router: Router) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.titleService.setTitle(`${routerItem['data']?.['title']} - ${common.orgName}`);
      }
    });
  }
}
