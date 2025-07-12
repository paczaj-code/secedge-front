import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySurvey } from './key-survey';

describe('KeySurvey', () => {
  let component: KeySurvey;
  let fixture: ComponentFixture<KeySurvey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeySurvey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeySurvey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
