import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ResultRoutingModule } from './result-routing.module';
import { ResultPageComponent } from './result-page/result-page.component';
import { ResultHeaderComponent } from './result-header/result-header.component';
import { PersonalityScaleComponent } from './personality-scale/personality-scale.component';

@NgModule({
  declarations: [
    ResultPageComponent,
    ResultHeaderComponent,
    PersonalityScaleComponent
  ],
  imports: [
    SharedModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
