import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonService } from '../services/common.service';
import { Common } from '../../models/Common';

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.css']
})
export class CommonErrorComponent {
  constructor(private titleService: Title, private router: Router, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.commonService.getById().subscribe((data: Common) => {
          this.titleService.setTitle(`${routerItem['data']?.['title']} - ${data.orgName}`);
        });
      }
    });
  }
}
