import { Component } from '@angular/core';
import portfolio from '../../data/portfolio.json';
import { Portfolio } from '../../Models/Portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioData: Portfolio[] = portfolio;
}
