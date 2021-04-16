import { TestBed } from '@angular/core/testing';

import { FuncionesCompartidasService } from './funciones-compartidas.service';

describe('FuncionesCompartidasService', () => {
  let service: FuncionesCompartidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionesCompartidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
