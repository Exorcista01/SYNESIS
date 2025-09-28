import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldCardsComponent } from './chield-cards.component';

describe('ChieldCardsComponent', () => {
  let component: ChieldCardsComponent;
  let fixture: ComponentFixture<ChieldCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChieldCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChieldCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
