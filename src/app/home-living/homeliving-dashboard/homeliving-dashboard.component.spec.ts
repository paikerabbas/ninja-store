import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelivingDashboardComponent } from './homeliving-dashboard.component';

describe('HomelivingDashboardComponent', () => {
  let component: HomelivingDashboardComponent;
  let fixture: ComponentFixture<HomelivingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelivingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomelivingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
