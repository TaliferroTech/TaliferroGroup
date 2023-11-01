import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgwWowModule } from 'ngx-wow';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { environment as env } from "src/environments/environment";

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    RecaptchaModule,
    NgwWowModule,
    RouterModule.forRoot([
      { path: '',  loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'e-commerce-architecture', redirectTo: '/services/e-commerce-architecture', pathMatch: 'full' },
      { path: 'api-design', redirectTo: '/services/api-design', pathMatch: 'full' },
      { path: 'agile-coaching', redirectTo: '/services/agile-coaching', pathMatch: 'full' },
      { path: 'apigee-integration', redirectTo: '/services/apigee-integration', pathMatch: 'full' },
      { path: 'cloud-architecture', redirectTo: '/services/cloud-architecture', pathMatch: 'full' },
      { path: 'data-design', redirectTo: '/services/data-design', pathMatch: 'full' },
      { path: 'machine-learning', redirectTo: '/services/machine-learning', pathMatch: 'full' },
      { path: 'website-optimization', redirectTo: '/services/website-optimization', pathMatch: 'full' },
      { path: 'website-development', redirectTo: '/services/website-development', pathMatch: 'full' },
      { path: 'healthcare-consulting', redirectTo: '/services/healthcare-consulting', pathMatch: 'full' },
      { path: 'lis', redirectTo: '/products/lis', pathMatch: 'full' },
      { path: 'passwordless', redirectTo: '/products/passwordless', pathMatch: 'full' },
      { path: 'social-media-marketing', redirectTo: '/services/social-media-marketing', pathMatch: 'full' },
      { path: 'products', loadChildren: () => import('./taliferro-products/taliferro-products.module').then(m => m.TaliferroProductsModule) },
      { path: 'services', loadChildren: () => import('./taliferro-services/taliferro-services.module').then(m => m.TaliferroServicesModule) },
      { path: 'team', loadChildren: () => import('./team/team.module').then(m => m.TeamModule) },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'blog/oct-2022', loadChildren: () => import('./blog2/blog2.module').then(m => m.Blog2Module) },
      { path: 'blog/nov-2022', loadChildren: () => import('./nov2022/nov2022.module').then(m => m.Nov2022Module) },
      { path: 'blog/dec-2022', loadChildren: () => import('./dec2022/dec2022.module').then(m => m.Dec2022Module) },
      { path: 'blog/jan-2023', loadChildren: () => import('./jan2023/jan2023.module').then(m => m.Jan2023Module) },
      { path: 'blog/feb-2023', loadChildren: () => import('./feb2023/feb2023.module').then(m => m.Feb2023Module) },
      { path: 'blog/mar-2023', loadChildren: () => import('./mar2023/mar2023.module').then(m => m.Mar2023Module) },
      { path: 'blog/apr-2023', loadChildren: () => import('./apr2023/apr2023.module').then(m => m.Apr2023Module) },
      { path: 'blog/may-2023', loadChildren: () => import('./may2023/may2023.module').then(m => m.May2023Module) },
      { path: 'blog/jun-2023', loadChildren: () => import('./jun2023/jun2023.module').then(m => m.Jun2023Module) },
      { path: 'blog/jul-2023', loadChildren: () => import('./jul2023/jul2023.module').then(m => m.Jul2023Module) },
      { path: 'blog/aug-2023', loadChildren: () => import('./august2023/august2023.module').then(m => m.August2023Module) },
      { path: 'blog/sep-2023', loadChildren: () => import('./sep2023/sep2023.module').then(m => m.Sep2023Module) },
      { path: 'blog/oct-2023', loadChildren: () => import('./oct2023/oct2023.module').then(m => m.Oct2023Module) },
      { path: 'tyrone-showers', redirectTo: '/team/tyrone-showers', pathMatch: 'full' },
      { path: 'blog/dec-2022/the-makings-of-a-sound-lims', redirectTo: 'blog/jan-2023/the-makings-of-a-sound-lims', pathMatch: 'full' },
      { path: 'blog/dec-2022/i-only-want-to-lose-money-with-people-i-know', redirectTo: 'blog/jan-2023/i-only-want-to-lose-money-with-people-i-know', pathMatch: 'full' },
      { path: 'blog/nov-2022/multiple-system-of-record-databases', redirectTo: '', pathMatch: 'full' },
      { path: 'blog/nov-2022/is-there-such-a-thing-as-company-culture', redirectTo: '', pathMatch: 'full' },
      { path: 'blog/mar-2023/cybersecurity-breaches-the-real-cost-of-hacking-and-data-theft', redirectTo: '', pathMatch: 'full' },
      { path: 'strategic-focus/', redirectTo: '', pathMatch: 'full' },
      { path: 'assets/files/Booker_Tyrone_Showers.pdf', redirectTo: '/team/tyrone-showers', pathMatch: 'full' },
      { path: 'index-5.html', redirectTo: '', pathMatch: 'full' },
      { path: 'the-rest-governance-key-signature/', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'privacy', redirectTo: '/team/tyrone-showers', pathMatch: 'full' },
      { path: 'index-2.html', redirectTo: '', pathMatch: 'full' },
      { path: 'home/', redirectTo: '', pathMatch: 'full' },
      { path: 'rest/', redirectTo: '', pathMatch: 'full' },
      { path: 'author/booker-showers/', redirectTo: '/team/tyrone-showers', pathMatch: 'full' },
      { path: '?view=mosaic', loadChildren: () => import('./url-error/url-error.module').then(m => m.UrlErrorModule) },
      { path: 'out-of-tune-with-anti-patterns/', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'index-4.html', redirectTo: '', pathMatch: 'full' },
      { path: 'blog/nov-2022/chances-are-youre-not-using-your-cloud-services-correctly-and-overpaying', redirectTo: 'blog/dec-2022/chances-are-youre-not-using-your-cloud-services-correctly-and-overpaying', pathMatch: 'full' },
      { path: 'index-3.html', redirectTo: '', pathMatch: 'full' },
      { path: 'influencing-rest-behavior/', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'feed/', loadChildren: () => import('./url-error/url-error.module').then(m => m.UrlErrorModule) },
      { path: 'tag/production-mainline/', loadChildren: () => import('./url-error/url-error.module').then(m => m.UrlErrorModule) },
      { path: 'blog/dec-2022/slow-performance-is-costing-you-money', redirectTo: 'blog/jan-2023/slow-performance-is-costing-you-money', pathMatch: 'full' },
      { path: 'blog/feb-2023/apple-homekit-with-your-current-projects', redirectTo: 'blog/mar-2023/apple-homekit-with-your-current-projects', pathMatch: 'full' },
      { path: 'blog/dec-2022/a-different-perspective-on-software-delivery', redirectTo: 'blog/jan-2023/a-different-perspective-on-software-delivery', pathMatch: 'full' },
      { path: 'blog/jan-2023/e-commerce-in-2023-what-you-need-to-known', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'blog/dec-2022/choosing-a-crm', redirectTo: 'blog/jan-2023/choosing-a-crm', pathMatch: 'full' },
      { path: 'blog/dec-2022/less-time-better-results', redirectTo: 'blog/jan-2023/less-time-better-results', pathMatch: 'full' },
      { path: 'blog/dec-2022/testing-open-source-tools', redirectTo: 'blog/jan-2023/testing-open-source-tools', pathMatch: 'full' },
      { path: 'blog/dec-2022/income-generation-investing-in-software', redirectTo: 'blog/jan-2023/income-generation-investing-in-software', pathMatch: 'full' },
      { path: 'blog/oh-how-I-hate-passwords-and-2-factor-authentication/https:/taliferro.com/blog/dont-let-your-web-store-turn-into-a-desert', redirectTo: 'blog/oh-how-I-hate-passwords-and-2-factor-authentication', pathMatch: 'full' },
      { path: 'blog/dec-2022/tips-for-excellent-api-design', redirectTo: 'blog/jan-2023/tips-for-excellent-api-design', pathMatch: 'full' },
      { path: 'blog/oct-2022/multiple-system-of-record-databases', redirectTo: 'blog/dec-2022/multiple-system-of-record-databases', pathMatch: 'full' },
      { path: 'blog/dec-2022/the-new-apple-homepod', redirectTo: 'blog/jan-2023/the-new-apple-homepod', pathMatch: 'full' },
      { path: 'blog/dec-2022/data-aware-softwarex`', redirectTo: 'blog/jan-2023/data-aware-software', pathMatch: 'full' },
      { path: 'blog/dec-2022/looking-for-a-sales-job', redirectTo: 'blog/jan-2023/looking-for-a-sales-job', pathMatch: 'full' },
      { path: '2022/09/taliferro-group-explainer', redirectTo: '', pathMatch: 'full' },
      { path: 'home/', redirectTo: '', pathMatch: 'full' },
      { path: 'avoid-rest-implementation-failure/', redirectTo: 'blog', pathMatch: 'full' },
      // { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
    ]),

  ],
  exports: [
    FormsModule, NgwWowModule,
    
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}, 
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
