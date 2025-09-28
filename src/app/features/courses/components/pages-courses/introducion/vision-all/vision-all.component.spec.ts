import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionAllComponent } from './vision-all.component';

describe('VisionAllComponent', () => {
  let component: VisionAllComponent;
  let fixture: ComponentFixture<VisionAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
