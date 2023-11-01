import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApigeeIntegrationComponent } from './apigee-integration/apigee-integration.component';
import { ApiDesignComponent } from './api-design/api-design.component';
import { AgileTrainingComponent } from './agile-training/agile-training.component';
import { CloudArchitectureComponent } from './cloud-architecture/cloud-architecture.component';
import { DataDesignComponent } from './data-design/data-design.component';
import { WebsiteOptimizationComponent } from './website-optimization/website-optimization.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { SocialMediaMarketingComponent } from './social-media-marketing/social-media-marketing.component';
import { ECommerceArchitectureComponent } from './e-commerce-architecture/e-commerce-architecture.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { HomeComponent } from './home/home.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Consulting Services' } },
    { path: 'agile-coaching', component: AgileTrainingComponent, data: { title: 'Agile Coaching' } },
    { path: 'apigee-integration', component: ApigeeIntegrationComponent, data: { title: 'APIGEE' } },
    { path: 'api-design', component: ApiDesignComponent, data: { title: 'API Design Consulting' } },
    { path: 'cloud-architecture', component: CloudArchitectureComponent, data: { title: 'Enterprise and Cloud Architecture Consulting' } },
    { path: 'e-commerce-architecture', component: ECommerceArchitectureComponent, data: { title: 'e-Commerce Consulting' } },
    { path: 'data-design',  component: DataDesignComponent, data: { title: 'Data Design Consulting' } },
    { path: 'machine-learning', component: MachineLearningComponent, data: { title: 'Machine Learning Consulting' } },
    { path: 'website-optimization', component: WebsiteOptimizationComponent, data: { title: 'Infrastructure and Website Optimization' } },
    { path: 'website-development', component: WebsiteDevelopmentComponent, data: { title: 'Bespoke Software and Website Development' } },
    { path: 'healthcare-consulting', component: HealthcareComponent, data: { title: 'Healthcare Consulting' } },
    { path: 'social-media-marketing', component: SocialMediaMarketingComponent, data: { title: 'Social Media Marketing Consulting' } },
    { path: 'sustainability', component: SustainabilityComponent, data: { title: 'Sustainability Consulting' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class TaliferroServicesRoutingModule { }