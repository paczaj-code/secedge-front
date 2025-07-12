import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSurvey } from './badge-survey';

describe('BadgeSurvey', () => {
  let component: BadgeSurvey;
  let fixture: ComponentFixture<BadgeSurvey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeSurvey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeSurvey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
