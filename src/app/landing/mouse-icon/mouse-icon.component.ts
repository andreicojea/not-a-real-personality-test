import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-icon',
  templateUrl: './mouse-icon.component.html',
  styleUrls: ['./mouse-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MouseIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
