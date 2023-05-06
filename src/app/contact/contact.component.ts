import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonService } from '../services/common.service';
import { LocationService } from '../services/location.service';
import { SocialService } from '../services/social.service';
import { Location } from '../../models/Location';
import { Social } from '../../models/Social';
import { Common } from '../../models/Common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  locations!: Location[];
  socials!: Social[];

  constructor(private titleService: Title, private router: Router, private locationService: LocationService, private socialService: SocialService, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.commonService.getById().subscribe((data: Common) => {
          this.titleService.setTitle(`${routerItem['data']?.['title']} - ${data.orgName}`);
        });
      }
    });
  }

  ngOnInit(): void {
    this.locationService.getAll().subscribe((data: Location[]) => {
      this.locations = data;
    });

    this.socialService.getAll().subscribe((data: Social[]) => {
      this.socials = data;
    });
  }
}
