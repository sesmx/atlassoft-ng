import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Blog } from 'src/models/Blog';
import { BlogService } from '../services/blog.service';
import { CommonService } from '../services/common.service';
import { Common } from 'src/models/Common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs!: Blog[];

  constructor(private titleService: Title, private router: Router, private blogService: BlogService, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.commonService.getById().subscribe((data: Common) => {
          this.titleService.setTitle(`${routerItem['data']?.['title']} - ${data.orgName}`);
        });
      }
    });
  }

  ngOnInit(): void {
    this.blogService.getAll().subscribe((data: Blog[]) => {
      this.blogs = data;
    });
  }
}
