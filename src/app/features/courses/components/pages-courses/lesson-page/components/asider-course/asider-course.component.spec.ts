import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiderCourseComponent } from './asider-course.component';

describe('AsiderCourseComponent', () => {
  let component: AsiderCourseComponent;
  let fixture: ComponentFixture<AsiderCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsiderCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsiderCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
