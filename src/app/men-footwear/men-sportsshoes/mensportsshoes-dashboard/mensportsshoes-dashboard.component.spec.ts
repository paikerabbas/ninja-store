import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensportsshoesDashboardComponent } from './mensportsshoes-dashboard.component';

describe('MensportsshoesDashboardComponent', () => {
  let component: MensportsshoesDashboardComponent;
  let fixture: ComponentFixture<MensportsshoesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensportsshoesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensportsshoesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
