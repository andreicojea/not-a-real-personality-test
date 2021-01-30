import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizResult } from './../../core/types/quiz-result';
import { QuizResultService } from './../../core/services/quiz-result.service';

@Injectable({
  providedIn: 'root'
})
export class QuizResultResolver implements Resolve<QuizResult> {

  constructor(private quizResultService: QuizResultService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<QuizResult> {
    const id = Number(route.paramMap.get('id'));
    return this.quizResultService.getResult(id);
  }
}
