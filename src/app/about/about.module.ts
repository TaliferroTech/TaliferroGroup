import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ThankYouTooComponent } from './thank-you-too/thank-you-too.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        AboutComponent,
        ThankYouComponent,
        ThankYouTooComponent,
        ReturnPolicyComponent,
        PrivacyPolicyComponent,
        TermsComponent,
        NotFoundComponent,
        ContactComponent
    ],
    imports: [
      CommonModule, SharedModule, AboutRoutingModule
    ]
  })
  export class AboutModule { }