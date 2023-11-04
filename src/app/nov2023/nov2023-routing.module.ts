import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { Nov012023Component } from './nov012023/nov012023.component';
import { Nov022023Component } from './nov022023/nov022023.component';
import { Nov032023Component } from './nov032023/nov032023.component';
import { Nov042023Component } from './nov042023/nov042023.component';
import { Nov052023Component } from './nov052023/nov052023.component';
import { Nov062023Component } from './nov062023/nov062023.component';
import { Nov072023Component } from './nov072023/nov072023.component';
import { Nov082023Component } from './nov082023/nov082023.component';
import { Nov092023Component } from './nov092023/nov092023.component';
import { Nov102023Component } from './nov102023/nov102023.component';
import { Nov112023Component } from './nov112023/nov112023.component';
import { Nov122023Component } from './nov122023/nov122023.component';
import { Nov132023Component } from './nov132023/nov132023.component';
import { Nov142023Component } from './nov142023/nov142023.component';
import { Nov152023Component } from './nov152023/nov152023.component';
import { Nov162023Component } from './nov162023/nov162023.component';
import { Nov172023Component } from './nov172023/nov172023.component';
import { Nov182023Component } from './nov182023/nov182023.component';
import { Nov192023Component } from './nov192023/nov192023.component';
import { Nov202023Component } from './nov202023/nov202023.component';
import { Nov212023Component } from './nov212023/nov212023.component';
import { Nov222023Component } from './nov222023/nov222023.component';
import { Nov232023Component } from './nov232023/nov232023.component';
import { Nov242023Component } from './nov242023/nov242023.component';
import { Nov252023Component } from './nov252023/nov252023.component';
import { Nov262023Component } from './nov262023/nov262023.component';
import { Nov272023Component } from './nov272023/nov272023.component';
import { Nov282023Component } from './nov282023/nov282023.component';
import { Nov292023Component } from './nov292023/nov292023.component';
import { Nov302023Component } from './nov302023/nov302023.component';

const routes: Routes = [
    { path: '', component: ListComponent, data: { title: 'November 2023 Postings' } },
    { path: 'ai-powered-retail-analytics-unveiling-trends-for-revenue-amplification', component: Nov012023Component, data: { title: 'AI-Powered Retail Analytics: Unveiling Trends for Revenue Amplification' } },
    { path: 'transcending-traditional-spreadsheets-a-how-to-guide-for-leveraging-nlp-and-machine-learning', component: Nov022023Component, data: { title: 'Transcending Traditional Spreadsheets: A How-To Guide for Leveraging NLP and Machine Learning' } },
    { path: 'ai-driven-dynamic-pricing', component: Nov032023Component, data: { title: 'AI-Driven Dynamic Pricing' } },
    { path: 'the-lessons-of-karma', component: Nov042023Component, data: { title: 'The Lessons of Karma' } },
    { path: 'the-sucker-era', component: Nov052023Component, data: { title: 'The Sucker Era' } },
    // { path: '', component: Nov062023Component, data: { title: '' } },
    // { path: '', component: Nov072023Component, data: { title: '' } },
    // { path: '', component: Nov082023Component, data: { title: '' } },
    // { path: '', component: Nov092023Component, data: { title: '' } },
    // { path: '', component: Nov102023Component, data: { title: '' } },
    // { path: '', component: Nov112023Component, data: { title: '' } },
    // { path: '', component: Nov122023Component, data: { title: '' } },
    // { path: '', component: Nov132023Component, data: { title: '' } },
    // { path: '', component: Nov142023Component, data: { title: '' } },
    // { path: '', component: Nov152023Component, data: { title: '' } },
    // { path: '', component: Nov162023Component, data: { title: '' } },
    // { path: '', component: Nov172023Component, data: { title: '' } },
    // { path: '', component: Nov182023Component, data: { title: '' } },
    // { path: '', component: Nov192023Component, data: { title: '' } },
    // { path: '', component: Nov202023Component, data: { title: '' } },
    // { path: '', component: Nov212023Component, data: { title: '' } },
    // { path: '', component: Nov222023Component, data: { title: '' } },
    // { path: '', component: Nov232023Component, data: { title: '' } },
    // { path: '', component: Nov242023Component, data: { title: '' } },
    // { path: '', component: Nov252023Component, data: { title: '' } },
    // { path: '', component: Nov262023Component, data: { title: '' } },
    // { path: '', component: Nov272023Component, data: { title: '' } },
    // { path: '', component: Nov282023Component, data: { title: '' } },
    // { path: '', component: Nov292023Component, data: { title: '' } },
    // { path: '', component: Nov302023Component, data: { title: '' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class Nov2023RoutingModule { }