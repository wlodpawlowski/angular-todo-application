import { TestBed, inject } from '@angular/core/testing';

import { CategoryDataService } from './category-data.service';

describe('CategoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryDataService]
    });
  });

  it('should be created', inject([CategoryDataService], (service: CategoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
