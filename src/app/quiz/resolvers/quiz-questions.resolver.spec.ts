import { TestBed } from '@angular/core/testing';

import { QuizQuestionsResolver } from './quiz-questions.resolver';

xdescribe('QuizQuestionsResolver', () => {
  let resolver: QuizQuestionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QuizQuestionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
