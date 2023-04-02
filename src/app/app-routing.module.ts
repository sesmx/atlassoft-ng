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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      includeNav: true,
      isSupport: false
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About Us',
      includeNav: true,
      isSupport: false
    }
  },
  {
    path: 'technology',
    component: TechnologyComponent,
    data: {
      title: 'Technology',
      includeNav: true,
      isSupport: false
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      title: 'Portfolio',
      includeNav: true,
      isSupport: false
    }
  },
  {
    path: 'portfolio/:id',
    component: PortfolioDetailsComponent,
    data: {
      title: 'Portfolio Details',
      includeNav: false,
      isSupport: false
    }
  },
  {
    path: 'career',
    component: CareerComponent,
    data: {
      title: 'Career',
      includeNav: true,
      isSupport: true
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact Us',
      includeNav: true,
      isSupport: true
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
      isSupport: false
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
