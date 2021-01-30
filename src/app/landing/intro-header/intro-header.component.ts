import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-header',
  templateUrl: './intro-header.component.html',
  styleUrls: ['./intro-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
