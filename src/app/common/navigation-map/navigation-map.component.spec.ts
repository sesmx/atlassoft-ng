import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMapComponent } from './navigation-map.component';

describe('NavigationMapComponent', () => {
  let component: NavigationMapComponent;
  let fixture: ComponentFixture<NavigationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
