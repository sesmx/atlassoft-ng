import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechnologyComponent } from './technology/technology.component';
import { CareerComponent } from './career/career.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ContactComponent } from './contact/contact.component';
import { CommonErrorComponent } from './common-error/common-error.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      includeNav: true,
      isSupport: false,
      parentNav: null
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About Us',
      includeNav: true,
      isSupport: false,
      parentNav: null
    }
  },
  {
    path: 'technology',
    component: TechnologyComponent,
    data: {
      title: 'Technology',
      includeNav: true,
      isSupport: false,
      parentNav: null
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      title: 'Portfolio',
      includeNav: true,
      isSupport: false,
      parentNav: null
    }
  },
  {
    path: 'portfolio/:id',
    component: PortfolioDetailsComponent,
    data: {
      title: 'Portfolio Details',
      includeNav: false,
      isSupport: false,
      parentNav: 'portfolio'
    }
  },
  {
    path: 'career',
    component: CareerComponent,
    data: {
      title: 'Career',
      includeNav: true,
      isSupport: true,
      parentNav: null
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Blog',
      includeNav: true,
      isSupport: false,
      parentNav: null
    }
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent,
    data: {
      title: 'Blog Details',
      includeNav: false,
      isSupport: false,
      parentNav: 'blog'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact Us',
      includeNav: true,
      isSupport: true,
      parentNav: null
    }
  },
  {
    path: '**',
    redirectTo: 'error'
  },
  {
    path: 'error',
    component: CommonErrorComponent,
    data: {
      title: 'Page not found',
      includeNav: false,
      isSupport: false,
      parentNav: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
