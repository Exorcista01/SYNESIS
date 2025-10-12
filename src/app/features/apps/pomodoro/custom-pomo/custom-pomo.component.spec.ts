import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPomoComponent } from './custom-pomo.component';

describe('CustomPomoComponent', () => {
  let component: CustomPomoComponent;
  let fixture: ComponentFixture<CustomPomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPomoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
