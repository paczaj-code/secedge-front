import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftActivity } from './shift-activity';

describe('ShiftActivity', () => {
  let component: ShiftActivity;
  let fixture: ComponentFixture<ShiftActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
