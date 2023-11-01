import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Jan032023Component } from './jan032023/jan032023.component';
import { Jan042023Component } from './jan042023/jan042023.component';
import { Jan052023Component } from './jan052023/jan052023.component';
import { Jan062023Component } from './jan062023/jan062023.component';
import { Jan092023Component } from './jan092023/jan092023.component';
import { Jan102023Component } from './jan102023/jan102023.component';
import { Jan112023Component } from './jan112023/jan112023.component';
import { Jan122023Component } from './jan122023/jan122023.component';
import { Jan132023Component } from './jan132023/jan132023.component';
import { Jan162023Component } from './jan162023/jan162023.component';
import { Jan172023Component } from './jan172023/jan172023.component';
import { Jan182023Component } from './jan182023/jan182023.component';
import { Jan192023Component } from './jan192023/jan192023.component';
import { Jan202023Component } from './jan202023/jan202023.component';
import { Jan232023Component } from './jan232023/jan232023.component';
import { Jan242023Component } from './jan242023/jan242023.component';
import { Jan252023Component } from './jan252023/jan252023.component';
import { Jan262023Component } from './jan262023/jan262023.component';
import { Jan272023Component } from './jan272023/jan272023.component';
import { Jan302023Component } from './jan302023/jan302023.component';
import { Jan312023Component } from './jan312023/jan312023.component';

import { ListComponent } from './list/list.component';


const routes: Routes = [
        { path: '', component: ListComponent, data: { title: 'December Postings' } },
        { path: 'a-guide-to-designing-your-home-office', component: Jan032023Component, data: { title: 'A Guide to Designing Your Home Office' } },
        { path: 'five-effective-tips-to-protect-your-website-from-cyber-attacks', component: Jan042023Component, data: { title: '5 Effective Tips to Protect Your Website from Cyber Attacks' } },
        { path: 'less-time-better-results', component: Jan052023Component, data: { title: 'Less Time Better Results' } },
        { path: 'modern-day-statistical-studies', component: Jan062023Component, data: { title: 'Modern Day Statistical Studies' } },
        { path: 'data-aware-software', component: Jan092023Component, data: { title: 'Data-Aware Software' } },
        { path: 'slow-performance-is-costing-you-money', component: Jan102023Component, data: { title: 'Slow Performance is Costing You Money' } },
        { path: 'testing-open-source-tools', component: Jan112023Component, data: { title: 'Testing Open-Source Tools' } },
        { path: 'yes-i-was-naive', component: Jan122023Component, data: { title: 'Yes, I Was Naive' } },
        { path: 'ai-is-about-patterns-for-now', component: Jan132023Component, data: { title: 'AI is About Patterns - for Now' } },
        { path: 'establishing-trust-with-clients', component: Jan162023Component, data: { title: 'Establishing Trust With Clients' } },
        { path: 'looking-for-a-sales-job', component: Jan172023Component, data: { title: 'Looking for a Sales Job?' } },
        { path: 'income-generation-investing-in-software', component: Jan182023Component, data: { title: 'Income Generation - Investing In Software' } },
        { path: 'choosing-a-crm', component: Jan192023Component, data: { title: 'Choosing A CRM' } },
        { path: 'the-new-apple-homepod', component: Jan202023Component, data: { title: 'The New Apple HomePod' } },
        { path: 'when-your-client-throws-you-under-the-bus', component: Jan232023Component, data: { title: 'When Your Client Throws You Under the Bus' } },
        { path: 'the-makings-of-a-sound-lims', component: Jan242023Component, data: { title: 'The Makings of a sound LIMS' } },
        { path: 'your-project-is-not-ci-cd', component: Jan252023Component, data: { title: 'Your Project is Not CI/CD' } },
        { path: 'tips-for-excellent-api-design', component: Jan262023Component, data: { title: 'Tips for Excellent API Design' } },
        { path: 'a-different-perspective-on-software-delivery', component: Jan272023Component, data: { title: 'A Different Perspective on Software Delivery' } },
        { path: 'i-only-want-to-lose-money-with-people-i-know', component: Jan302023Component, data: { title: 'I only want to lose money with people I know' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class Jan2023RoutingModule { }
