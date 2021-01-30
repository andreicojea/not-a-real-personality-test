import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuizResultService } from './../core/services/quiz-result.service';
import { Question } from './../core/types/question';
import { Answer } from '../core/types/answer';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizComponent implements OnInit, OnDestroy {

  questions!: Question[];
  answers: Answer[] = [];
  currentQuestionIndex = 0;
  isSaving = false;

  private subscription?: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizResultService: QuizResultService
  ) { }

  ngOnInit(): void {
    this.questions = this.activatedRoute.snapshot.data.questions;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getProgress(): number {
    return this.isSaving ? 100 : this.currentQuestionIndex / this.questions.length * 100;
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  getButtonText(): string {
    if (this.isSaving) {
      return 'Saving...';
    } else if (this.isLastQuestion()) {
      return 'Finish';
    } else {
      return 'Next';
    }
  }

  setAnswer(answer: Answer): void {
    this.answers[this.currentQuestionIndex] = answer;
  }

  canGoNext(): boolean {
    return this.isCurentQuestionAnswered() && !this.isSaving;
  }

  next(): void {
    if (this.isLastQuestion()) {
      this.finish();
    } else {
      this.currentQuestionIndex += 1;
    }
  }

  private finish(): void {
    this.isSaving = true;
    this.subscription = this.quizResultService.saveResult(this.answers).subscribe(result => {
      this.router.navigate(['result', result.id]);
    }, () => {
      this.isSaving = false;
    });
  }

  private isCurentQuestionAnswered(): boolean {
    return !!this.answers[this.currentQuestionIndex];
  }

}
