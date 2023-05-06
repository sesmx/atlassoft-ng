import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonService } from '../services/common.service';
import { Common } from '../../models/Common';
import { CareerService } from '../services/career.service';
import { Career } from '../../models/Career';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  careerOptions!: Career[];
  resumeSendEmail!: string;

  constructor(private titleService: Title, private router: Router, private careerService: CareerService, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.commonService.getById().subscribe((data: Common) => {
          this.titleService.setTitle(`${routerItem['data']?.['title']} - ${data.orgName}`);
          this.resumeSendEmail = data.supportEmail;
        });
      }
    });
  }

  ngOnInit(): void {
    this.careerService.getAll().subscribe((data: Career[]) => {
      this.careerOptions = data;
    });
  }
}
