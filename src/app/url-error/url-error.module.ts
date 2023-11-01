import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncorrectUrlComponent } from './incorrect-url/incorrect-url.component';

import { UrlErrorRoutingModule } from './url-error-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IncorrectUrlComponent
  ],
  imports: [
    CommonModule,
    UrlErrorRoutingModule,
    SharedModule
  ]
})
export class UrlErrorModule { }
