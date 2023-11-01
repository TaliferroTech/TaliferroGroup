import { TestBed } from '@angular/core/testing';

import { RandomDateService } from './random-date.service';

describe('RandomDateService', () => {
  let service: RandomDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
