import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodofeedbackComponent } from './todofeedback.component';

describe('TodofeedbackComponent', () => {
  let component: TodofeedbackComponent;
  let fixture: ComponentFixture<TodofeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodofeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodofeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
