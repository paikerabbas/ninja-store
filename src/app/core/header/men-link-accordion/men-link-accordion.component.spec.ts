import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenLinkAccordionComponent } from './men-link-accordion.component';

describe('MenLinkAccordionComponent', () => {
  let component: MenLinkAccordionComponent;
  let fixture: ComponentFixture<MenLinkAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenLinkAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenLinkAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
