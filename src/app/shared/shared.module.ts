import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import { RouterModule } from '@angular/router';
import { HeaderAreaLightComponent } from './header-area-light/header-area-light.component';
import { BreadCrumbLightComponent } from './bread-crumb-light/bread-crumb-light.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { OffCanvasMenuComponent } from './off-canvas-menu/off-canvas-menu.component';
import { TyroneShowersBioComponent } from './tyrone-showers-bio/tyrone-showers-bio.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { PostsHistoryComponent } from './posts-history/posts-history.component';
import { BreadCrumbTeamComponent } from './bread-crumb-team/bread-crumb-team.component';
import { SingleTeamDetailsComponent } from './single-team-details/single-team-details.component';
import { RandomDateService } from '../services/random-date.service';
import { YouMightLikeComponent } from './you-might-like/you-might-like.component';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { BannerArea2Component } from './banner-area2/banner-area2.component';
import { BenefitAreaComponent } from './benefit-area/benefit-area.component';
import { BannerAreaHomeLightComponent } from './banner-area-home-light/banner-area-home-light.component';
import { CounterAreaComponent } from './counter-area/counter-area.component';
import { ContactAreaComponent } from './contact-area/contact-area.component';
import { AboutUsAreaComponent } from './about-us-area/about-us-area.component';
import { VideoAreaComponent } from './video-area/video-area.component';
import { SpecialAreaComponent } from './special-area/special-area.component';
import { ServiceArea2Component } from './service-area2/service-area2.component';
import { PayPerClickComponent } from './pay-per-click/pay-per-click.component';
import { DesignProcessAreaComponent } from './design-process-area/design-process-area.component';
import { ModalBoxComponent } from './modal-box/modal-box.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderAreaComponent } from './header-area/header-area.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { ProductAreaComponent } from './product-area/product-area.component';
import { TestimonialAreaComponent } from './testimonial-area/testimonial-area.component';
import { BlogAreaComponent } from './blog-area/blog-area.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ProjectAreaComponent } from './project-area/project-area.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ApprovedByComponent } from './approved-by/approved-by.component';
import { VideoHeaderSectionComponent } from './video-header-section/video-header-section.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './slider/slider.component';
import { PackagesComponent } from './packages/packages.component';
import { FaqComponent } from './faq/faq.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { MultiProjectsComponent } from './multi-projects/multi-projects.component';

@NgModule({
    declarations: [
        HeaderAreaLightComponent,
        BreadCrumbLightComponent,
        FooterAreaComponent,
        OffCanvasMenuComponent,
        TyroneShowersBioComponent,
        RecentPostsComponent,
        PostsHistoryComponent,
        BreadCrumbTeamComponent,
        SingleTeamDetailsComponent,
        YouMightLikeComponent,
        BannerAreaComponent,
        BannerArea2Component,
        BenefitAreaComponent,
        BannerAreaHomeLightComponent,
        CounterAreaComponent,
        ContactAreaComponent,
        AboutUsAreaComponent,
        VideoAreaComponent,
        SpecialAreaComponent,
        ServiceArea2Component,
        PayPerClickComponent,
        DesignProcessAreaComponent,
        ModalBoxComponent,
        PreloaderComponent,
        HeaderAreaComponent,
        ServiceAreaComponent,
        ProductAreaComponent,
        TestimonialAreaComponent,
        BlogAreaComponent,
        CallToActionComponent,
        ProjectAreaComponent,
        CaseStudiesComponent,
        ApprovedByComponent,
        VideoHeaderSectionComponent,
        CarouselComponent,
        SliderComponent,
        PackagesComponent,
        FaqComponent,
        RecentProjectsComponent,
        MultiProjectsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        RecaptchaModule

    ],
    exports: [
        FormsModule,
        RouterModule,
        RecaptchaModule,
        HeaderAreaLightComponent,
        BreadCrumbLightComponent,
        FooterAreaComponent,
        OffCanvasMenuComponent,
        TyroneShowersBioComponent,
        RecentPostsComponent,
        PostsHistoryComponent,
        BreadCrumbTeamComponent,
        SingleTeamDetailsComponent,
        YouMightLikeComponent,
        BannerAreaComponent,
        BannerArea2Component,
        BenefitAreaComponent,
        BannerAreaHomeLightComponent,
        CounterAreaComponent,
        ContactAreaComponent,
        AboutUsAreaComponent,
        VideoAreaComponent,
        SpecialAreaComponent,
        ServiceArea2Component,
        PayPerClickComponent,
        DesignProcessAreaComponent,
        ModalBoxComponent,
        PreloaderComponent,
        HeaderAreaComponent,
        ServiceAreaComponent,
        ProductAreaComponent,
        TestimonialAreaComponent,
        BlogAreaComponent,
        CallToActionComponent,
        ProjectAreaComponent,
        CaseStudiesComponent,
        ApprovedByComponent,
        CarouselComponent,
        SliderComponent,
        PackagesComponent,
        FaqComponent,
        RecentProjectsComponent,
        MultiProjectsComponent
    ],
    providers: [ RandomDateService],
})
export class SharedModule { }