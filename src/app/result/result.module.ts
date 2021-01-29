import { NgModule } from '@angular/core';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { SharedModule } from '../shared/shared.module';
import { ResultHeaderComponent } from './result-header/result-header.component';
import { PersonalityScaleComponent } from './personality-scale/personality-scale.component';


@NgModule({
  declarations: [ResultComponent, ResultHeaderComponent, PersonalityScaleComponent],
  imports: [
    SharedModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
