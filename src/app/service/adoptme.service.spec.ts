import { TestBed } from '@angular/core/testing';

import { AdoptmeService } from './adoptme.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdoptmeService', () => {
  let service: AdoptmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(AdoptmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
