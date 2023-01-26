import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensweetshirtsDashboardComponent } from './mensweetshirts-dashboard.component';

describe('MensweetshirtsDashboardComponent', () => {
  let component: MensweetshirtsDashboardComponent;
  let fixture: ComponentFixture<MensweetshirtsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensweetshirtsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensweetshirtsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
