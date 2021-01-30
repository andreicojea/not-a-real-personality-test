import { Component, Input, OnInit, Output, EventEmitter, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Answer } from './../../core/types/answer';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './quiz-answer.component.html',
  styleUrls: ['./quiz-answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizAnswerComponent implements OnInit {

  faCheck = faCheck;

  @Input() answer!: Answer;
  @Input() isChecked!: boolean;
  @Input() disabled!: boolean;

  @Output() check = new EventEmitter<Answer>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick(): void {
    this.check.emit(this.answer);
  }

}
