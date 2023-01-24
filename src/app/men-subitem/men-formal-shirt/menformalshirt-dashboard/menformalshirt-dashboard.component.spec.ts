import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenformalshirtDashboardComponent } from './menformalshirt-dashboard.component';

describe('MenformalshirtDashboardComponent', () => {
  let component: MenformalshirtDashboardComponent;
  let fixture: ComponentFixture<MenformalshirtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenformalshirtDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenformalshirtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
