import { TestBed, inject } from '@angular/core/testing';

import { PersonPhoneService } from './person-phone.service';

describe('PersonPhoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonPhoneService]
    });
  });

  it('should be created', inject([PersonPhoneService], (service: PersonPhoneService) => {
    expect(service).toBeTruthy();
  }));
});