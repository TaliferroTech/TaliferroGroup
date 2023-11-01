import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ThankYouTooComponent } from './thank-you-too/thank-you-too.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AboutComponent, data: { title: 'Home' } },
  { path: 'contact-taliferro-group', component: ContactComponent, data: { title: 'Contact Us' } },
  { path: 'thank-you', component: ThankYouComponent, data: { title: 'Thank You' } },
  { path: 'thank-you-too', component: ThankYouTooComponent, data: { title: 'Thank You' } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { title: 'Privacy Policy' } },
  { path: 'terms-of-service', component: TermsComponent, data: { title: 'Terms of Service' } },
  { path: 'refund-policy', component: ReturnPolicyComponent, data: { title: 'Return Policy' } },
  { path: 'not-found', component: NotFoundComponent, data: { title: '404 Not Found' } }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class AboutRoutingModule { }