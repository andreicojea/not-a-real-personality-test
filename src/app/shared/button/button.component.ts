import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[app-button], button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() color = 'default';

  @HostBinding('class') get colorClass(): string {
    return `color-${this.color}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
