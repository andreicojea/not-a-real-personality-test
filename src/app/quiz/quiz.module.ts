import { NgModule } from '@angular/core';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { SharedModule } from '../shared/shared.module';
import { QuizProgressComponent } from './quiz-progress/quiz-progress.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizAnswerComponent } from './quiz-answer/quiz-answer.component';

@NgModule({
  declarations: [
    QuizComponent,
    QuizProgressComponent,
    QuizQuestionComponent,
    QuizAnswerComponent
  ],
  imports: [
    SharedModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
