import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentshirtDashboardComponent } from './mentshirt-dashboard.component';

describe('MentshirtDashboardComponent', () => {
  let component: MentshirtDashboardComponent;
  let fixture: ComponentFixture<MentshirtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentshirtDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentshirtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
