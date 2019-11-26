import { TestBed } from '@angular/core/testing';

import { AffichageusersService } from './affichageusers.service';

describe('AffichageusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffichageusersService = TestBed.get(AffichageusersService);
    expect(service).toBeTruthy();
  });
});
