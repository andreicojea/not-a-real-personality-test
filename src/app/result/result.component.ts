import { PersonalityType } from './../core/enums/personality-type.enum';
import { QuizResult } from './../core/types/quiz-result';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent implements OnInit {

  quizResult!: QuizResult;
  personalityTypes = PersonalityType;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.quizResult = this.activatedRoute.snapshot.data.quizResult;
  }

}
