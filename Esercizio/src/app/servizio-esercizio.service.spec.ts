import { TestBed } from '@angular/core/testing';

import { ServizioEsercizioService } from './servizio-esercizio.service';

describe('ServizioEsercizioService', () => {
  let service: ServizioEsercizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioEsercizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
