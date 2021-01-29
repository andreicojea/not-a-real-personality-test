import { QuizResult } from './../types/quiz-result.d';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { PersonalityType } from '../enums/personality-type.enum';

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
    const { url, method } = request;

    switch (true) {
      case url.match(/\/quiz-result\/\d+$/) && method === 'GET':
        return this.getQuizResult(this.idFromUrl(url));
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

  private ok(body?: any): Observable<HttpResponse<any>> {
    return of(new HttpResponse({ status: 200, body }));
  }

  private idFromUrl(url: string): number {
    const urlParts = url.split('/');
    return Number(urlParts[urlParts.length - 1]);
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
