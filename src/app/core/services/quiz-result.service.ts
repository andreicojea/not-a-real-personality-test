import { environment } from './../../../environments/environment';
import { QuizResult } from './../types/quiz-result';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../types/answer';

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {

  constructor(private httpClient: HttpClient) { }

  getResult(id: number): Observable<QuizResult> {
    return this.httpClient.get<QuizResult>(`${environment.apiBaseUrl}/quiz-results/${id}`);
  }

  saveResult(answers: Answer[]): Observable<QuizResult> {
    return this.httpClient.post<QuizResult>(`${environment.apiBaseUrl}/quiz-results`, answers);
  }
}
