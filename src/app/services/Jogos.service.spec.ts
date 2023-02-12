import { TestBed } from '@angular/core/testing';

import { JogosService } from './Jogos.service';

describe('CatalogoService', () => {
  let service: JogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
