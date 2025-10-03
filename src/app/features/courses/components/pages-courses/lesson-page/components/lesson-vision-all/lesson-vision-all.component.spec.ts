import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonVisionAllComponent } from './lesson-vision-all.component';

describe('LessonVisionAllComponent', () => {
  let component: LessonVisionAllComponent;
  let fixture: ComponentFixture<LessonVisionAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonVisionAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonVisionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
