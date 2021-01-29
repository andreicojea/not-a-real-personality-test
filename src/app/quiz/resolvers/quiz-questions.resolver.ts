import { QuizQuestionService } from './../../core/services/quiz-question.service';
import { Question } from './../../core/types/question';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizQuestionsResolver implements Resolve<Question[]> {

  constructor(private quizQuestionService: QuizQuestionService) { }

  resolve(): Observable<Question[]> {
    return this.quizQuestionService.getQuestions();
  }
}
