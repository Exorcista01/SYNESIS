import { TestBed } from '@angular/core/testing';

import { CatalogosPagesService } from './catalogos-pages.service';

describe('CatalogosPagesService', () => {
  let service: CatalogosPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogosPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
