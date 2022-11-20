import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArivalDashboardComponent } from './new-arival-dashboard.component';

describe('NewArivalDashboardComponent', () => {
  let component: NewArivalDashboardComponent;
  let fixture: ComponentFixture<NewArivalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArivalDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArivalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
