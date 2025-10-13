import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCardsCatalogoComponent } from './all-cards-catalogo.component';

describe('AllCardsCatalogoComponent', () => {
  let component: AllCardsCatalogoComponent;
  let fixture: ComponentFixture<AllCardsCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCardsCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCardsCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
