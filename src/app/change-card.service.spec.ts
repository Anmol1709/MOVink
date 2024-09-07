import { TestBed } from '@angular/core/testing';

import { ChangeCardService } from './change-card.service';

describe('ChangeCardService', () => {
  let service: ChangeCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
