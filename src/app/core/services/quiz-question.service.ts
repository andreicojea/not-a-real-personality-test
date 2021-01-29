import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Question } from './../types/question';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizQuestionService {

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${environment.apiBaseUrl}/questions`);
  }
}
