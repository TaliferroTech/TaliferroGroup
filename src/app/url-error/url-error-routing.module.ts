import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncorrectUrlComponent } from './incorrect-url/incorrect-url.component';

const routes: Routes = [
{ path: '', component: IncorrectUrlComponent, data: { title: 'Move or Deleted URL' } },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class UrlErrorRoutingModule { }
