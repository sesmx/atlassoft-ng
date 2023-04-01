import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import common from '../../data/common.json';
import technology from '../../data/technology.json';
import { Technology } from '../../models/Technology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  technologies: Technology[] = technology;

  constructor(private titleService: Title, private router: Router) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.titleService.setTitle(`${routerItem['data']?.['title']} - ${common.orgName}`);
      }
    });
  }
}
