import { QuizQuestionsResolver } from './resolvers/quiz-questions.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

const routes: Routes = [{
  path: '',
  component: QuizPageComponent,
  resolve: {
    questions: QuizQuestionsResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
