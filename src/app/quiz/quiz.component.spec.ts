import { QuizResult } from './../core/types/quiz-result.d';
import { QuizProgressComponent } from './quiz-progress/quiz-progress.component';
import { QuizAnswerComponent } from './quiz-answer/quiz-answer.component';
import { SharedModule } from './../shared/shared.module';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuizComponent } from './quiz.component';
import { Question } from '../core/types/question';
import { By } from '@angular/platform-browser';
import { runOnPushChangeDetection } from '../../test/on-push-change-detection.helper';
import { QuizResultService } from '../core/services/quiz-result.service';
import { PersonalityType } from '../core/enums/personality-type.enum';
import { of } from 'rxjs';

const mockQuestions: Question[] = [
  {
    id: 1,
    title: 'Question 1',
    answers: [
      {
        id: 1,
        text: 'Answer 1.1'
      },
      {
        id: 2,
        text: 'Answer 1.2'
      }
    ]
  },
  {
    id: 2,
    title: 'Question 2',
    answers: [
      {
        id: 3,
        text: 'Answer 2.1'
      },
      {
        id: 4,
        text: 'Answer 2.2'
      }
    ]
  }
];

const mockResult: QuizResult = {
  id: 123,
  personalityType: PersonalityType.ambivert,
  scaleValue: 60
};

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizComponent, QuizQuestionComponent, QuizAnswerComponent, QuizProgressComponent],
      imports: [SharedModule, RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                questions: mockQuestions
              }
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current progress', async () => {
    const progressHeading = fixture.debugElement.query(By.css('.progress-section h4'));

    expect(progressHeading.nativeElement.textContent).toBe('Question 1/2');
    expect(component.getProgress()).toBe(0);

    component.currentQuestionIndex = 1;
    await runOnPushChangeDetection(fixture);

    expect(progressHeading.nativeElement.textContent).toBe('Question 2/2');
    expect(component.getProgress()).toBe(50);

    component.isSaving = true;
    await runOnPushChangeDetection(fixture);

    expect(component.getProgress()).toBe(100);
  });

  it('should display current question', async () => {
    const questionHeading = fixture.debugElement.query(By.css('app-quiz-question h2'));
    expect(questionHeading.nativeElement.textContent).toBe(mockQuestions[0].title);

    component.currentQuestionIndex = 1;
    await runOnPushChangeDetection(fixture);

    expect(questionHeading.nativeElement.textContent).toBe(mockQuestions[1].title);
  });

  it('should disable the "Next" button if no answer is selected', async () => {
    const nextButton = fixture.debugElement.query(By.css('.button-section button'));
    expect(nextButton.nativeElement.disabled).toBeTrue();

    component.setAnswer(mockQuestions[0].answers[0]);
    await runOnPushChangeDetection(fixture);

    expect(nextButton.nativeElement.disabled).toBeFalse();
  });

  it('should change the button text based on the quiz progress', async () => {
    const nextButton = fixture.debugElement.query(By.css('.button-section button'));

    expect(nextButton.nativeElement.textContent).toContain('Next');

    component.currentQuestionIndex = 1;
    await runOnPushChangeDetection(fixture);

    expect(nextButton.nativeElement.textContent).toContain('Finish');

    component.isSaving = true;
    await runOnPushChangeDetection(fixture);

    expect(nextButton.nativeElement.textContent).toContain('Saving...');
  });

  it('should submit the data and navigate to result page', async () => {
    const quizResultService = fixture.debugElement.injector.get(QuizResultService);
    const quizResultServiceSpy = spyOn(quizResultService, 'saveResult').and.returnValue(of(mockResult));

    const router = fixture.debugElement.injector.get(Router);
    const routerSpy = spyOn(router, 'navigate').and.callFake(() => Promise.resolve(true));

    mockQuestions.forEach(selectFirstAnswerAndClickNext);

    const firstAnswerOfEachQuestion = mockQuestions.map(q => q.answers[0]);

    expect(quizResultServiceSpy).toHaveBeenCalledOnceWith(firstAnswerOfEachQuestion);
    expect(routerSpy).toHaveBeenCalledOnceWith(['result', mockResult.id]);
  });

  const selectFirstAnswerAndClickNext = async () => {
    const nextButton = fixture.debugElement.query(By.css('.button-section button'));
    const answerElements = fixture.debugElement.queryAll(By.directive(QuizAnswerComponent));

    answerElements[0].triggerEventHandler('click', null);
    nextButton.triggerEventHandler('click', null);

    await runOnPushChangeDetection(fixture);
  };
});
