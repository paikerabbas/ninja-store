import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenformalshoesDashboardComponent } from './menformalshoes-dashboard.component';

describe('MenformalshoesDashboardComponent', () => {
  let component: MenformalshoesDashboardComponent;
  let fixture: ComponentFixture<MenformalshoesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenformalshoesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenformalshoesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
