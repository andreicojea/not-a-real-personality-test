import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizProgressComponent implements OnInit {

  @Input() value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
