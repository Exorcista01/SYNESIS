import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaProgressComponent } from './calenda-progress.component';

describe('CalendaProgressComponent', () => {
  let component: CalendaProgressComponent;
  let fixture: ComponentFixture<CalendaProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendaProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendaProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
