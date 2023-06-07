import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/models/Blog';
import { Breadcrumb } from 'src/models/Breadcrumb';
import { BlogService } from '../services/blog.service';
import { CommonService } from '../services/common.service';
import { Common } from 'src/models/Common';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  selectedBlog: Blog | undefined;
  breadcrumbNavArray: Breadcrumb[] = [
    {
      name: 'Blog',
      path: '/blog'
    }
  ];

  constructor(private titleService: Title, private router: Router, private route: ActivatedRoute, private blogService: BlogService, private commonService: CommonService) {
    this.router.config.forEach(routerItem => {
      if (this.router.parseUrl(this.router.url).toString() === `/${routerItem['path']}`) {
        this.commonService.getById().subscribe((data: Common) => {
          this.titleService.setTitle(`${routerItem['data']?.['title']} - ${data.orgName}`);
        });
      }
    });
  }

  ngOnInit(): void {
    this.blogService.getById(this.route.snapshot.paramMap.get('id')).subscribe((data: Blog) => {
      this.selectedBlog = data;
      if (this.selectedBlog === undefined || this.selectedBlog === null) {
        this.router.navigate(['/error']);
      }
    });
  }
}
