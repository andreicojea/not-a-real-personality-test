import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() stickyOffset = 0;
  stickyTopbar = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.stickyTopbar = window.pageYOffset >= this.stickyOffset;
  }

}
