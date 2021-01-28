import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { IntroHeaderComponent } from './intro-header/intro-header.component';


@NgModule({
  declarations: [
    LandingComponent,
    IntroHeaderComponent
  ],
  imports: [
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
