import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer } from 'src/app/core/types/answer';
import { Question } from 'src/app/core/types/question';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() question!: Question;
  @Input() currentAnswer!: Answer;
  @Input() selectionDisabled = false;
  @Output() answerSelect = new EventEmitter<Answer>();

  constructor() { }

  ngOnInit(): void {
  }

}
