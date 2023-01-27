import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenjacketsDashboardComponent } from './menjackets-dashboard.component';

describe('MenjacketsDashboardComponent', () => {
  let component: MenjacketsDashboardComponent;
  let fixture: ComponentFixture<MenjacketsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenjacketsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenjacketsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
