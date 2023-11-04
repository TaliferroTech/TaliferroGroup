import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Nov012022Component } from './nov012022/nov012022.component';
import { Nov022022Component } from './nov022022/nov022022.component';
import { Nov032022Component } from './nov032022/nov032022.component';
import { Nov042022Component } from './nov042022/nov042022.component';
import { Nov092022Component } from './nov092022/nov092022.component';
import { Nov112022Component } from './nov112022/nov112022.component';
import { Nov142022Component } from './nov142022/nov142022.component';
import { Nov152022Component } from './nov152022/nov152022.component';
import { Nov172022Component } from './nov172022/nov172022.component';
import { Nov182022Component } from './nov182022/nov182022.component';
import { Nov212022Component } from './nov212022/nov212022.component';
import { Nov222022Component } from './nov222022/nov222022.component';
import { Nov232022Component } from './nov232022/nov232022.component';
import { Nov242022Component } from './nov242022/nov242022.component';
import { Nov252022Component } from './nov252022/nov252022.component';
import { Nov262022Component } from './nov262022/nov262022.component';
import { Nov272022Component } from './nov272022/nov272022.component';
import { Nov282022Component } from './nov282022/nov282022.component';

import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', component: ListComponent, data: { title: 'November 2022 Postings' } },
    { path: 'security-vulnerability-management-white-paper', component: Nov012022Component, data: { title: 'Security Vulnerability Management White Paper' } },
    { path: 'best-practices-for-network-systems', component: Nov022022Component, data: { title: 'Security Vulnerability Management White Paper' } },
    { path: 'modern-e-commerce-architecture', component: Nov032022Component, data: { title: 'Modern e-Commerce Architecture' } },
    { path: 'e-commerce-architecture-best-practices', component: Nov042022Component, data: { title: 'e-Commerce Architecture Best Practices' } },
    { path: 'most-companies-have-poor-it-security', component: Nov092022Component, data: { title: 'Most Companies Have Poor IT Security' } },
    { path: 'a-simple-solution-to-increasing-sales-if-you-already-have-sales', component: Nov112022Component, data: { title: 'A simple solution to increasing sales - if you already have sales' } },
    { path: 'artificial-intelligence-vs-machine-learning', component: Nov142022Component, data: { title: 'Artificial Intelligence vs Machine learning' } },
    { path: 'passwordless-white-paper', component: Nov152022Component, data: { title: 'Passwordless - White Paper' } },
    { path: 'security-vulnerability-remediation-white-paper', component: Nov172022Component, data: { title: 'Security Vulnerability Remediation - White Paper' } },
    { path: 'portals-white-paper', component: Nov182022Component, data: { title: 'Portals - White Paper' } },
    { path: 'architectural-design-patterns', component: Nov212022Component, data: { title: 'Architectural Design Patterns' } },
    { path: 'gcp-cloud-architecture', component: Nov222022Component, data: { title: 'GCP Cloud Architecture' } },
    { path: 'api-design-best-practices', component: Nov232022Component, data: { title: 'API Design Best Practices' } },
    { path: 'software-as-a-service-has-come-a-long-way', component: Nov242022Component, data: { title: 'Software as a Service has come a long way' } },
    { path: 'virtual-networks-why-bother', component: Nov252022Component, data: { title: 'Virtual Networks - Why bother?' } },
    { path: 'software-design-guide', component: Nov262022Component, data: { title: 'Software Design Guide' } },
    { path: 'application-architecture', component: Nov272022Component, data: { title: 'Application Architecture' } },
    { path: 'azure-in-reflection', component: Nov282022Component, data: { title: 'Azure in Reflection' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class Nov2022RoutingModule { }
  