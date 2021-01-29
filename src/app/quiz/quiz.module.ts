import { NgModule } from '@angular/core';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { SharedModule } from '../shared/shared.module';
import { QuizProgressComponent } from './quiz-progress/quiz-progress.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

@NgModule({
  declarations: [
    QuizComponent,
    QuizProgressComponent,
    QuizQuestionComponent
  ],
  imports: [
    SharedModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
