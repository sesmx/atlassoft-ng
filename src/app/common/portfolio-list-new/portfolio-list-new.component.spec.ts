import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioListNewComponent } from './portfolio-list-new.component';

describe('PortfolioListNewComponent', () => {
  let component: PortfolioListNewComponent;
  let fixture: ComponentFixture<PortfolioListNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioListNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
