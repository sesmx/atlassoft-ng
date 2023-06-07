import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderNavComponent } from './common/header-nav/header-nav.component';
import { ServicesComponent } from './common/services/services.component';
import { ClientSectionComponent } from './common/client-section/client-section.component';
import { LoaderComponent } from './common/loader/loader.component';
import { PortfolioListNewComponent } from './common/portfolio-list-new/portfolio-list-new.component';
import { FooterSectionComponent } from './common/footer-section/footer-section.component';
import { NavigationMapComponent } from './common/navigation-map/navigation-map.component';
import { PartnersComponent } from './common/partners/partners.component';
import { TechnologyComponent } from './technology/technology.component';
import { ZeroprefixPipe } from './pipes/zeroprefix.pipe';
import { CareerComponent } from './career/career.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ContactComponent } from './contact/contact.component';
import { SafePipe } from './pipes/safe.pipe';
import { ScrollTopComponent } from './common/scroll-top/scroll-top.component';
import { CookieBarComponent } from './common/cookie-bar/cookie-bar.component';
import { CommonErrorComponent } from './common-error/common-error.component';
import { BlogComponent } from './blog/blog.component';
import { ShortPipe } from './pipes/short.pipe';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderNavComponent,
    ServicesComponent,
    ClientSectionComponent,
    LoaderComponent,
    PortfolioListNewComponent,
    FooterSectionComponent,
    NavigationMapComponent,
    PartnersComponent,
    TechnologyComponent,
    ZeroprefixPipe,
    CareerComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
    ContactComponent,
    SafePipe,
    ScrollTopComponent,
    CookieBarComponent,
    CommonErrorComponent,
    BlogComponent,
    ShortPipe,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
