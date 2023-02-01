import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinfeedbackComponent } from './binfeedback.component';

describe('BinfeedbackComponent', () => {
  let component: BinfeedbackComponent;
  let fixture: ComponentFixture<BinfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
