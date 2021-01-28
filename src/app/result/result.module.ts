import { NgModule } from '@angular/core';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { SharedModule } from '../shared/shared.module';
import { ResultHeaderComponent } from './result-header/result-header.component';


@NgModule({
  declarations: [ResultComponent, ResultHeaderComponent],
  imports: [
    SharedModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
