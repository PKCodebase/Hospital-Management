import { TestBed } from '@angular/core/testing';

import { MedicineSercvice } from './medicine.service';

describe('MedicineSercvice', () => {
  let service: MedicineSercvice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineSercvice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
