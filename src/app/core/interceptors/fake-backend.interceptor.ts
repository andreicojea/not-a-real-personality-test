import { QuizResult } from './../types/quiz-result.d';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { PersonalityType } from '../enums/personality-type.enum';
import { Question } from '../types/question';
import { Answer } from '../types/answer';

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
        return this.ok({
          id,
          personalityType: PersonalityType.INTROVERT,
          scaleValue: 25
        });
      case 1:
        return this.ok({
          id,
          personalityType: PersonalityType.AMBIVERT,
          scaleValue: 45
        });
      default:
        return this.ok({
          id,
          personalityType: PersonalityType.EXTROVERT,
          scaleValue: 80
        });
    }
  }

  private saveResult(answers: Answer[]): Observable<HttpResponse<QuizResult>> {
    return this.getQuizResult(this.randomId());
  }

  private getQuestions(): Observable<HttpResponse<Question[]>> {
    return this.ok([
      {
        id: 1,
        title: 'Q1',
        answers: [
          {
            id: 1,
            text: 'Ans 1'
          },
          {
            id: 2,
            text: 'Ans 2'
          },
        ]
      },
      {
        id: 2,
        title: 'Q2',
        answers: [
          {
            id: 3,
            text: 'Ans 21'
          },
          {
            id: 4,
            text: 'Ans 22'
          },
        ]
      },
      {
        id: 3,
        title: 'Q3',
        answers: [
          {
            id: 5,
            text: 'Ans 31'
          },
          {
            id: 6,
            text: 'Ans 32'
          },
        ]
      },
    ]);
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
