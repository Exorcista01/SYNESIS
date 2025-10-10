import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerExerciseComponent } from './banner-exercise.component';

describe('BannerExerciseComponent', () => {
  let component: BannerExerciseComponent;
  let fixture: ComponentFixture<BannerExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
