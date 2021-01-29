import { TestBed } from '@angular/core/testing';

import { QuizResultResolver } from './quiz-result.resolver';

describe('QuizResultResolver', () => {
  let resolver: QuizResultResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QuizResultResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
