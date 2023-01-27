import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MendhotisDashboardComponent } from './mendhotis-dashboard.component';

describe('MendhotisDashboardComponent', () => {
  let component: MendhotisDashboardComponent;
  let fixture: ComponentFixture<MendhotisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MendhotisDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MendhotisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
