import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import common from '../../data/common.json';
import careers from '../../data/careers.json';
import { Career } from '../../models/Career';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  careerOptions: Career[] = careers;
  resumeSendEmail: string = common.supportEmail;

  constructor(private titleService: Title, private router: Router) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.titleService.setTitle(`${routerItem['data']?.['title']} - ${common.orgName}`);
      }
    });
  }
}
