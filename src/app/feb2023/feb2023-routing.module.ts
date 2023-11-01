import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { Feb012023Component } from './feb012023/feb012023.component';
import { Feb022023Component } from './feb022023/feb022023.component';
import { Feb032023Component } from './feb032023/feb032023.component';
import { Feb042023Component } from './feb042023/feb042023.component';
import { Feb052023Component } from './feb052023/feb052023.component';
import { Feb062023Component } from './feb062023/feb062023.component';
import { Feb072023Component } from './feb072023/feb072023.component';
import { Feb082023Component } from './feb082023/feb082023.component';
import { Feb092023Component } from './feb092023/feb092023.component';
import { Feb102023Component } from './feb102023/feb102023.component';
import { Feb112023Component } from './feb112023/feb112023.component';
import { Feb122023Component } from './feb122023/feb122023.component';
import { Feb132023Component } from './feb132023/feb132023.component';
import { Feb142023Component } from './feb142023/feb142023.component';
import { Feb152023Component } from './feb152023/feb152023.component';
import { Feb162023Component } from './feb162023/feb162023.component';
import { Feb172023Component } from './feb172023/feb172023.component';
import { Feb182023Component } from './feb182023/feb182023.component';
import { Feb192023Component } from './feb192023/feb192023.component';
import { Feb202023Component } from './feb202023/feb202023.component';
import { Feb212023Component } from './feb212023/feb212023.component';
import { Feb222023Component } from './feb222023/feb222023.component';
import { Feb232023Component } from './feb232023/feb232023.component';
import { Feb242023Component } from './feb242023/feb242023.component';
import { Feb252023Component } from './feb252023/feb252023.component';
import { Feb262023Component } from './feb262023/feb262023.component';
import { Feb272023Component } from './feb272023/feb272023.component';
import { Feb282023Component } from './feb282023/feb282023.component';

const routes: Routes = [
    { path: '', component: ListComponent, data: { title: 'February Postings' } },
    { path: 'small-sprints', component: Feb012023Component, data: { title: 'Small Sprints' } },
    { path: 'five-tips-for-proper-api-design', component: Feb022023Component, data: { title: '5 tips for proper API Design' } },
    { path: 'hubspot-as-your-data-system-of-record', component: Feb032023Component, data: { title: 'HubSpot as your data system of record' } },
    { path: 'google-cloud-architecture-fundamentals-tips-and-tricks', component: Feb042023Component, data: { title: 'Google Cloud Architecture Fundamentals: Tips and Tricks' } },
    { path: 'e-commerce-in-2023-what-you-need-to-know', component: Feb052023Component, data: { title: 'e-Commerce in 2023 - what you need to know' } },
    { path: 'website-optimization', component: Feb062023Component, data: { title: 'Website Optimization' } },
    { path: 'mistakes-in-configuring-an-api-gateway', component: Feb072023Component, data: { title: 'Mistakes in Configuring an API gateway' } },
    { path: 'building-customer-relationships', component: Feb082023Component, data: { title: 'Building Customer Relationships' } },
    { path: 'the-advantages-of-outsourcing-your-it-department', component: Feb092023Component, data: { title: 'The Advantages of Outsourcing Your IT Department' } },
    { path: 'failing-in-digital-transformation', component: Feb102023Component, data: { title: 'Failing in Digital Transformation? ' } },
    { path: 'staff-augmentation-vs-consulting-understanding-the-key-differences', component: Feb112023Component, data: { title: 'Staff Augmentation vs. Consulting: Understanding the Key Differences' } },
    { path: 'about-lis', component: Feb122023Component, data: { title: 'About LIS' } },
    { path: 'when-your-client-wants-agile-but-doesnt-want-to-follow-the-agile-framework', component: Feb132023Component, data: { title: 'What do you do when your client wants an agile process but doesn\'t want to follow the agile framework' } },
    { path: 'racism-and-the-workplace', component: Feb142023Component, data: { title: 'Racism and the Workplace' } },
    { path: 'lemlist-the-hype-vs-reality', component: Feb152023Component, data: { title: 'Lemlist: The Hype vs Reality' } },
    { path: 'the-importance-of-providing-accurate-time-estimates-to-your-client', component: Feb162023Component, data: { title: 'The Importance of Providing Accurate Time Estimates to Your Client' } },
    { path: 'movies-and-technology', component: Feb172023Component, data: { title: 'Movies and Technology' } },
    { path: 'how-being-a-musician-helps-me-as-an-information-technologist', component: Feb182023Component, data: { title: 'How Being a Musician Helps Me as an Information Technologist' } },
    { path: 'information-technology-and-war', component: Feb192023Component, data: { title: 'Information Technology and War' } },
    { path: 'strategic-approach-to-digital-transformation', component: Feb202023Component, data: { title: 'Strategic Approach to Digital Transformation' } },
    { path: 'why-so-few-women-coders', component: Feb212023Component, data: { title: 'Why So Few Women Coders?' } },
    { path: 'hiring-people-smarter-than-you-will-help', component: Feb222023Component, data: { title: 'Hiring People Smarter Than You Will Help' } },
    { path: 'passwordless-is-coming', component: Feb232023Component, data: { title: 'Passwordless is Coming' } },
    { path: 'playing-games-to-clear-your-mind-for-real-client-work', component: Feb242023Component, data: { title: 'Playing Games to Clear Your Mind for Real Client Work' } },
    { path: 'navigating-company-politics-as-a-consultant', component: Feb252023Component, data: { title: 'Navigating Company Politics as a Consultant' } },
    { path: 'top-software-design-patterns-in-typescript', component: Feb262023Component, data: { title: 'Top Software Design Patterns in TypeScript' } },
    { path: 'dont-over-integrate', component: Feb272023Component, data: { title: 'Don\'t Over Integrate' } },
    { path: 'bespoke-software', component: Feb282023Component, data: { title: 'Bespoke Software' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class Feb2023RoutingModule { }
