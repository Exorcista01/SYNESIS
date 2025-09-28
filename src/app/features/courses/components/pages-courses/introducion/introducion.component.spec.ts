import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducionComponent } from './introducion.component';

describe('IntroducionComponent', () => {
  let component: IntroducionComponent;
  let fixture: ComponentFixture<IntroducionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroducionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroducionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
