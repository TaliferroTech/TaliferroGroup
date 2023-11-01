import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TaliferroProductsRoutingModule } from './taliferro-products-routing.module';

import { LisComponent } from './lis/lis.component';
import { PasswordlessComponent } from './passwordless/passwordless.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LisComponent, PasswordlessComponent, HomeComponent],
  imports: [
    CommonModule, SharedModule, TaliferroProductsRoutingModule
  ]
})
export class TaliferroProductsModule { }
