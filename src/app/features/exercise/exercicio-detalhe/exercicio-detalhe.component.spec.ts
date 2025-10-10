import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDetalheComponent } from './exercicio-detalhe.component';

describe('ExercicioDetalheComponent', () => {
  let component: ExercicioDetalheComponent;
  let fixture: ComponentFixture<ExercicioDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
