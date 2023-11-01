import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dec012022Component } from './dec012022/dec012022.component';
import { Dec022022Component } from './dec022022/dec022022.component';
import { Dec032022Component } from './dec032022/dec032022.component';
import { Dec042022Component } from './dec042022/dec042022.component';
import { Dec052022Component } from './dec052022/dec052022.component';
import { Dec062022Component } from './dec062022/dec062022.component';
import { Dec072022Component } from './dec072022/dec072022.component';
import { Dec082022Component } from './dec082022/dec082022.component';
import { Dec092022Component } from './dec092022/dec092022.component';
import { Dec102022Component } from './dec102022/dec102022.component';
import { Dec122022Component } from './dec122022/dec122022.component';
import { Dec132022Component } from './dec132022/dec132022.component';
import { Dec142022Component } from './dec142022/dec142022.component';
import { Dec152022Component } from './dec152022/dec152022.component';
import { Dec162022Component } from './dec162022/dec162022.component';
import { Dec192022Component } from './dec192022/dec192022.component';
import { Dec202022Component } from './dec202022/dec202022.component';
import { Dec212022Component } from './dec212022/dec212022.component';
import { Dec222022Component } from './dec222022/dec222022.component';
import { Dec232022Component } from './dec232022/dec232022.component';
import { Dec242022Component } from './dec242022/dec242022.component';
import { Dec252022Component } from './dec252022/dec252022.component';
import { Dec262022Component } from './dec262022/dec262022.component';
import { Dec272022Component } from './dec272022/dec272022.component';
import { Dec282022Component } from './dec282022/dec282022.component';
import { Dec292022Component } from './dec292022/dec292022.component';
import { Dec302022Component } from './dec302022/dec302022.component';
import { Dec312022Component } from './dec312022/dec312022.component';

import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', component: ListComponent, data: { title: 'December Postings' } },
    { path: 'how-your-websites-poor-performance-is-costing-you-money', component: Dec012022Component, data: { title: 'How your website\'s poor performance is costing you money' } },
    { path: 'the-benefits-of-having-an-api-gateway', component: Dec022022Component, data: { title: 'The benefits of having an API Gateway' } },
    { path: 'creating-a-software-rollout-plan', component: Dec032022Component, data: { title: 'Creating a software Rollout plan' } },
    { path: 'turning-it-expense-projects-into-revenue-generating-products', component: Dec042022Component, data: { title: 'Turning IT expense projects into revenue-generating products' } },
    { path: 'multiple-system-of-record-databases', component: Dec052022Component, data: { title: 'Multiple System of Record Databases' } },
    { path: 'using-facebook-to-build-your-audience', component: Dec062022Component, data: { title: 'Using Facebook to build your audience' } },
    { path: 'lets-talk-about-layered-architecture-in-the-cloud', component: Dec072022Component, data: { title: 'Let\'s talk about layered architecture in the cloud' } },
    { path: 'how-to-start-a-software-project-that-inspires-excitement', component: Dec082022Component, data: { title: 'How to start a software project that inspires excitement' } },
    { path: 'chances-are-youre-not-using-your-cloud-services-correctly-and-overpaying', component: Dec092022Component, data: { title: 'Chances are you\'re not using your cloud services correctly and overpaying' } },
    { path: 'is-there-such-a-thing-as-company-culture', component: Dec102022Component, data: { title: 'Is there such a thing as company culture?' } },
    { path: 'making-business-improvements-in-bite-size-increments', component: Dec122022Component, data: { title: 'Making Business Improvements in bite-size increments' } },
    { path: 'api-governance-a-practical-approach', component: Dec132022Component, data: { title: 'API Governance - a practical approach' } },
    { path: 'softwares-impact-on-the-business-industry-replacing-paper', component: Dec142022Component, data: { title: 'Software\'s impact on the business industry replacing paper' } },
    { path: 'the-importance-of-being-digital-efficiency', component: Dec152022Component, data: { title: 'The importance of being digital efficiency' } },
    { path: 'a-how-to-guide-on-ordering-a-machine-learning-project-for-your-company', component: Dec162022Component, data: { title: 'A how-to guide on ordering a machine learning project for your company' } },
    { path: 'creating-the-perfect-client-experience', component: Dec192022Component, data: { title: 'Creating the Perfect Client Experience' } },
    { path: 'totara-for-students-on-their-first-day-at-school', component: Dec202022Component, data: { title: 'Totara for students on their first day at school' } },
    { path: 'great-ideas', component: Dec212022Component, data: { title: 'Great Ideas' } },
    { path: 'machine-learning-experiments', component: Dec222022Component, data: { title: 'Machine Learning Experiments' } },
    { path: 'six-things-you-might-not-know-about-software-architecture', component: Dec232022Component, data: { title: '6 Things You Might Not Know About Software Architecture' } },
    { path: 'how-fermi-estimation-can-solve-your-software-development-problems', component: Dec242022Component, data: { title: 'How Fermi Estimation Can Solve Your Software Development Problems' } },
    { path: 'top-four-benefits-of-separating-your-database', component: Dec252022Component, data: { title: 'Top 4 Benefits of Separating Your Database' } },
    { path: 'how-to-create-microservices-for-simplicity', component: Dec262022Component, data: { title: 'How To Create Microservices for Simplicity' } },
    { path: 'five-reasons-you-should-not-be-a-gcp-partner', component: Dec272022Component, data: { title: 'Five reasons you should not be a GCP Partner' } },
    { path: 'dont-overspend-on-unnecessary-cloud-services', component: Dec282022Component, data: { title: 'Don\'t overspend on unnecessary cloud services' } },
    { path: 'an-e-commerce-platform-for-selling', component: Dec292022Component, data: { title: 'An e-commerce platform for selling' } },
    { path: 'keeping-customers-happy-by-being-responsive', component: Dec302022Component, data: { title: 'Keeping Customers Happy by being Responsive' } },
    { path: 'tips-for-secure-passwordless-signin-with-email-address-only', component: Dec312022Component, data: { title: 'Tips for Secure Passwordless SignIn with Email Address only' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class Dec2022RoutingModule { }
