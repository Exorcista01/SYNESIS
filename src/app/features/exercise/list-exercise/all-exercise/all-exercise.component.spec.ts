import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExerciseComponent } from './all-exercise.component';

describe('AllExerciseComponent', () => {
  let component: AllExerciseComponent;
  let fixture: ComponentFixture<AllExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
