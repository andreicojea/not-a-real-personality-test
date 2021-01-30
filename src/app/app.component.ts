import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
