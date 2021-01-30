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
          personalityType: PersonalityType.introvert,
          scaleValue: 25
        });
      case 1:
        return this.ok({
          id,
          personalityType: PersonalityType.ambivert,
          scaleValue: 45
        });
      default:
        return this.ok({
          id,
          personalityType: PersonalityType.extrovert,
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
        title: `You're planning a night out.\nWhich option sounds more fun?`,
        answers: [
          {
            id: 1,
            text: `Going out with a group of friends. The more people, the more energy you feel.`
          },
          {
            id: 2,
            text: `Dinner with your best friend — just the two of you — and sharing what's on your mind`
          },
        ]
      },
      {
        id: 2,
        title: 'If you were forced to chose one,\nwhich would you choose?',
        answers: [
          {
            id: 3,
            text: 'A weekend with zero social plans'
          },
          {
            id: 4,
            text: 'A weekend packed with social plans'
          },
        ]
      },
      {
        id: 3,
        title: 'As a student, would you rather...',
        answers: [
          {
            id: 5,
            text: 'Participate in a lively discussion'
          },
          {
            id: 6,
            text: 'Listen to an interesting lecture'
          },
        ]
      },
      {
        id: 4,
        title: 'In general, after attending a large party or networking event, how do you feel?',
        answers: [
          {
            id: 7,
            text: 'Energized and ready for more'
          },
          {
            id: 8,
            text: 'Tired and drained, even if I had fun'
          },
        ]
      },
      {
        id: 5,
        title: `You've just met someone new.\nHow would they describe you?`,
        answers: [
          {
            id: 9,
            text: 'Outgoing, talkative, and friendly'
          },
          {
            id: 10,
            text: 'Quiet, reserved, and calm'
          },
        ]
      },
      {
        id: 6,
        title: `In general, which statement\nis most true for you?`,
        answers: [
          {
            id: 11,
            text: `I don't mind multi-tasking, and I often do it.`
          },
          {
            id: 12,
            text: 'I like to focus deeply on one thing at a time rather than jump from task to task.'
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
