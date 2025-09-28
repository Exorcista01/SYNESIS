import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCoursesComponent } from './pages-courses.component';

describe('PagesCoursesComponent', () => {
  let component: PagesCoursesComponent;
  let fixture: ComponentFixture<PagesCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
