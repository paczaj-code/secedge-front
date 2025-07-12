import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSurvey } from './ticket-survey';

describe('TicketSurvey', () => {
  let component: TicketSurvey;
  let fixture: ComponentFixture<TicketSurvey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketSurvey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketSurvey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
