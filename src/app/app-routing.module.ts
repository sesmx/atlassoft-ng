import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TechnologyComponent } from './technology/technology.component';
import { CareerComponent } from './career/career.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ContactComponent } from './contact/contact.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
