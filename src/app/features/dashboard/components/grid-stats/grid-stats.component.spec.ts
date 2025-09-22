import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStatsComponent } from './grid-stats.component';

describe('GridStatsComponent', () => {
  let component: GridStatsComponent;
  let fixture: ComponentFixture<GridStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
