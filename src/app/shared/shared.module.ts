import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
