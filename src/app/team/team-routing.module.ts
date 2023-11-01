import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TyroneShowersComponent } from './tyrone-showers/tyrone-showers.component';
import { VikkiOwensComponent } from './vikki-owens/vikki-owens.component';
import { GuestComponent } from './guest/guest.component';

const routes: Routes = [
    // { path: '', component: GuestComponent, data: { title: 'Guest' } },
    { path: 'vikki-owens', component: VikkiOwensComponent, data: { title: 'Vikki Owens' } },
    { path: 'tyrone-showers', component: TyroneShowersComponent, data: { title: 'Tyrone Showers' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class TeamRoutingModule { }