import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraSurvey } from './camera-survey';

describe('CameraSurvey', () => {
  let component: CameraSurvey;
  let fixture: ComponentFixture<CameraSurvey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraSurvey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CameraSurvey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
