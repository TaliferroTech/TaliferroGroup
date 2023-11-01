import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaliferroServicesRoutingModule } from './taliferro-services-routing.module';
import { SharedModule } from '../shared/shared.module';
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


@NgModule({
  declarations: [
    ApigeeIntegrationComponent,
    ApiDesignComponent,
    AgileTrainingComponent,
    CloudArchitectureComponent,
    DataDesignComponent,
    WebsiteOptimizationComponent,
    WebsiteDevelopmentComponent,
    SocialMediaMarketingComponent,
    ECommerceArchitectureComponent,
    MachineLearningComponent,
    HealthcareComponent,
    HomeComponent,
    SustainabilityComponent
  ],
  imports: [
    CommonModule,
    TaliferroServicesRoutingModule,
    SharedModule
  ]
})
export class TaliferroServicesModule { }
