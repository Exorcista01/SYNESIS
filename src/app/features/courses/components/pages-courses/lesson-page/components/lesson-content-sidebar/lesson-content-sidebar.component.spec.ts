import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonContentSidebarComponent } from './lesson-content-sidebar.component';

describe('LessonContentSidebarComponent', () => {
  let component: LessonContentSidebarComponent;
  let fixture: ComponentFixture<LessonContentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonContentSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonContentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
