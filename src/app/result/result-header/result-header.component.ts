import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import startCase from 'lodash.startcase';
import { PersonalityType } from './../../core/enums/personality-type.enum';

@Component({
  selector: 'app-result-header',
  templateUrl: './result-header.component.html',
  styleUrls: ['./result-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultHeaderComponent implements OnInit {

  @Input() personalityType!: PersonalityType;

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(): string {
    const formattedType = startCase(this.personalityType.toLowerCase());
    return `You are an ${formattedType}!`;
  }

  getImage(): string {
    return `assets/${this.personalityType.toLowerCase()}.png`;
  }

}
