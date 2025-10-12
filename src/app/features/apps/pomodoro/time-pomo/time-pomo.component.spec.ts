import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePomoComponent } from './time-pomo.component';

describe('TimePomoComponent', () => {
  let component: TimePomoComponent;
  let fixture: ComponentFixture<TimePomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimePomoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
