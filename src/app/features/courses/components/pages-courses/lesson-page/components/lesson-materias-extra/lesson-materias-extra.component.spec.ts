import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonMateriasExtraComponent } from './lesson-materias-extra.component';

describe('LessonMateriasExtraComponent', () => {
  let component: LessonMateriasExtraComponent;
  let fixture: ComponentFixture<LessonMateriasExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonMateriasExtraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonMateriasExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
