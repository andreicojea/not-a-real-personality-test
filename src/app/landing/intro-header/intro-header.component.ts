import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-header',
  templateUrl: './intro-header.component.html',
  styleUrls: ['./intro-header.component.scss']
})
export class IntroHeaderComponent implements OnInit {

  static MIN_HEIGHT = 700;
  fullHeight!: number;

  constructor() { }

  ngOnInit(): void {
    this.fullHeight = Math.max(window.innerHeight, IntroHeaderComponent.MIN_HEIGHT);
  }

}
