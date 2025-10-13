import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCatalogoComponent } from './pages-catalogo.component';

describe('PagesCatalogoComponent', () => {
  let component: PagesCatalogoComponent;
  let fixture: ComponentFixture<PagesCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
