import { QuizResult } from './../types/quiz-result';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { PersonalityType } from '../enums/personality-type.enum';
import { Question } from '../types/question';
import { Answer } from '../types/answer';
import { questions, results } from './fake-db.json';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.handleRequest(request, next).pipe(
      materialize(),
      delay(200),
      dematerialize()
    );
  }

  private handleRequest(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const { url, method, body } = request;

    switch (true) {
      case url.match(/\/quiz-results\/\d+$/) && method === 'GET':
        return this.getQuizResult(this.idFromUrl(url));
      case url.endsWith('/quiz-results') && method === 'POST':
        return this.saveResult(body);
      case url.endsWith('/questions') && method === 'GET':
        return this.getQuestions();
      default:
        return next.handle(request);
    }
  }

  private getQuizResult(id: number): Observable<HttpResponse<QuizResult>> {
    switch (id % 3) {
      case 0:
        return this.ok(results.introvert);
      case 1:
        return this.ok(results.extrovert);
      default:
        return this.ok(results.ambivert);
    }
  }

  private saveResult(answers: Answer[]): Observable<HttpResponse<QuizResult>> {
    return this.getQuizResult(this.randomId());
  }

  private getQuestions(): Observable<HttpResponse<Question[]>> {
    return this.ok(questions);
  }

  private ok(body?: any): Observable<HttpResponse<any>> {
    return of(new HttpResponse({ status: 200, body }));
  }

  private idFromUrl(url: string): number {
    const urlParts = url.split('/');
    return Number(urlParts[urlParts.length - 1]);
  }

  private randomId(): number {
    return new Date().getTime() % 10000;
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
