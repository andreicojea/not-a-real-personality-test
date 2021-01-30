import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { QuizProgressComponent } from './quiz-progress/quiz-progress.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizAnswerComponent } from './quiz-answer/quiz-answer.component';

@NgModule({
  declarations: [
    QuizPageComponent,
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
