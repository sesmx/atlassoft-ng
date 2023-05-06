import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonService } from '../services/common.service';
import { Common } from '../../models/Common';
import { TechnologyService } from '../services/technology.service';
import { Technology } from '../../models/Technology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologies!: Technology[];

  constructor(private titleService: Title, private router: Router, private technologyService: TechnologyService, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.commonService.getById().subscribe((data: Common) => {
          this.titleService.setTitle(`${routerItem['data']?.['title']} - ${data.orgName}`);
        });
      }
    });
  }

  ngOnInit(): void {
    this.technologyService.getAll().subscribe((data: Technology[]) => {
      this.technologies = data;
    });
  }
}
