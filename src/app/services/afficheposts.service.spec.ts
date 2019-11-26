import { TestBed } from '@angular/core/testing';

import { AffichepostsService } from './afficheposts.service';

describe('AffichepostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffichepostsService = TestBed.get(AffichepostsService);
    expect(service).toBeTruthy();
  });
});
