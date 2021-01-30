import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personality-scale',
  templateUrl: './personality-scale.component.html',
  styleUrls: ['./personality-scale.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalityScaleComponent implements OnInit {

  @Input() value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
