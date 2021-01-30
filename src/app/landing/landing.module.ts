import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IntroHeaderComponent } from './intro-header/intro-header.component';
import { MouseIconComponent } from './mouse-icon/mouse-icon.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    IntroHeaderComponent,
    MouseIconComponent
  ],
  imports: [
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
