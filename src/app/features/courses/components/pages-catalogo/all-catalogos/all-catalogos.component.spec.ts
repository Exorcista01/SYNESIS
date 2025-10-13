import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatalogosComponent } from './all-catalogos.component';

describe('AllCatalogosComponent', () => {
  let component: AllCatalogosComponent;
  let fixture: ComponentFixture<AllCatalogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCatalogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
