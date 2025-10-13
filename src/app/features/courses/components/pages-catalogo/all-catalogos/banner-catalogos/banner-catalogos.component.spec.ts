import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCatalogosComponent } from './banner-catalogos.component';

describe('BannerCatalogosComponent', () => {
  let component: BannerCatalogosComponent;
  let fixture: ComponentFixture<BannerCatalogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerCatalogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
