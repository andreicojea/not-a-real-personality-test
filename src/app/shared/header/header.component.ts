import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() stickyOffset = 0;
  stickyTopbar = false;

  @HostBinding('class.simple-sticky')
  get isSimpleSticky(): boolean {
    return this.stickyOffset === 0;
  }

  constructor() { }

  @HostListener('window:scroll')
  onScroll(): void {
    this.stickyTopbar = window.pageYOffset >= this.stickyOffset;
  }

  ngOnInit(): void {
    this.onScroll();
  }

}
