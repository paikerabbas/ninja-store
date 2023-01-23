import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDashboardComponent } from './women-dashboard.component';

describe('WomenDashboardComponent', () => {
  let component: WomenDashboardComponent;
  let fixture: ComponentFixture<WomenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
