import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensuitsDashboardComponent } from './mensuits-dashboard.component';

describe('MensuitsDashboardComponent', () => {
  let component: MensuitsDashboardComponent;
  let fixture: ComponentFixture<MensuitsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensuitsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensuitsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
