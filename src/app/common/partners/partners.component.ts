import { Component } from '@angular/core';
import partners from '../../../data/partners.json';
import { Partner } from '../../../models/Partner';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  partnerList: Partner[] = partners;

  sliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
    autoplay: false
  };

  sliderNavConfig = {
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    autoplay: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
  }
}
