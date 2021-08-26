import { TestBed, inject } from '@angular/core/testing';

import { PageToggleService } from './page-toggle.service';

describe('PageToggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageToggleService]
    });
  });

  it('should be created', inject([PageToggleService], (service: PageToggleService) => {
    expect(service).toBeTruthy();
  }));
});
