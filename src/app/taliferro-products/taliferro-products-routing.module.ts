import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LisComponent } from './lis/lis.component';
import { PasswordlessComponent } from './passwordless/passwordless.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Products' } },
    { path: 'lis', component: LisComponent, data: { title: 'Laboration Information System' } },
    { path: 'passwordless', component: PasswordlessComponent, data: { title: 'Passwordless Sign-in' } },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class TaliferroProductsRoutingModule { }
  