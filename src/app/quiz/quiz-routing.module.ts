import { QuizQuestionsResolver } from './resolvers/quiz-questions.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';

const routes: Routes = [{
  path: '',
  component: QuizComponent,
  resolve: {
    questions: QuizQuestionsResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
