import { PersonalityType } from './../enums/personality-type.enum';
import { QuizResult } from './../types/quiz-result';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {

  constructor(private httpClient: HttpClient) { }

  getResult(id: number): Observable<QuizResult> {
    // return this.httpClient.get<QuizResult>()
    return of({
      id,
      personalityType: PersonalityType.INTROVERT,
      scaleValue: 25
    });
  }
}
