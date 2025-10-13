import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCatalogosComponent } from './one-catalogos.component';

describe('OneCatalogosComponent', () => {
  let component: OneCatalogosComponent;
  let fixture: ComponentFixture<OneCatalogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneCatalogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
