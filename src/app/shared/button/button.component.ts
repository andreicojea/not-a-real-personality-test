import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'a[app-button], button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
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
