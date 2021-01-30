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

  @Input() answer!: Answer;
  @Input() isChecked!: boolean;
  @Input() disabled!: boolean;
  @Output() check = new EventEmitter<Answer>();

  faCheck = faCheck;

  constructor() { }

  @HostListener('click')
  onClick(): void {
    this.check.emit(this.answer);
  }

  ngOnInit(): void {
  }

}
