import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizResultResolver } from './resolvers/quiz-result.resolver';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: ':id',
    component: ResultPageComponent,
    resolve: {
      quizResult: QuizResultResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
