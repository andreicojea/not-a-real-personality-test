import { TestBed } from '@angular/core/testing';

import { QuizResultService } from './quiz-result.service';

xdescribe('QuizResultService', () => {
  let service: QuizResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
