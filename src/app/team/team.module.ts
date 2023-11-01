import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from './team-routing.module';
import { SharedModule } from '../shared/shared.module';

import { TyroneShowersComponent } from './tyrone-showers/tyrone-showers.component';
import { VikkiOwensComponent } from './vikki-owens/vikki-owens.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    TyroneShowersComponent,
    VikkiOwensComponent,
    GuestComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule
  ]
})
export class TeamModule { }
