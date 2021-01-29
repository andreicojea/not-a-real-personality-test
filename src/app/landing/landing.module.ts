import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { IntroHeaderComponent } from './intro-header/intro-header.component';
import { MouseIconComponent } from './mouse-icon/mouse-icon.component';


@NgModule({
  declarations: [
    LandingComponent,
    IntroHeaderComponent,
    MouseIconComponent
  ],
  imports: [
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
