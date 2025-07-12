import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftReport } from './shift-report';

describe('ShiftReport', () => {
  let component: ShiftReport;
  let fixture: ComponentFixture<ShiftReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
