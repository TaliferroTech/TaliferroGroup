import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-area',
  templateUrl: './testimonial-area.component.html',
  styleUrls: ['./testimonial-area.component.css']
})
export class TestimonialAreaComponent implements OnInit {

  testimonialNumber = 0;
  public testimonials = [
    {
      "text1": "...developed proper architecture deliverables and pushed to have them all reviews by the team, such as security, caching strategy, implementation plan, technology plan, and capability roadmap.",
      "title1": "Manager Cyber Security",
      "name1": "Kevin Stride",
      "logo1": "assets/images/ey.png",
      "text2": "...authored the bulk of AT&T's Guidelines for RESTful API Design. This document is an extremely useful compendium of best practices that we have used to drive consistency across APIs.",
      "title2": "Director",
      "name2": "Ed Lambert",
      "logo2": "assets/images/att.webp",
      "text3": "...extremely responsive, provided clear guidance and helped navigate the process of enabling cross company access...it was nice to have a real contact to work with",
      "title3": "Manager",
      "name3": "Corey Kallison",
      "logo3": "assets/images/takeda.png"
    },
    {
      "text1": "...extremely knowledgeable about best practices and ideal state architecture for API applications ... addresses customer concerns with industry experts and software vendors (such as Azure) to ensure proposed solutions are feasible and meet customer requirements",
      "title1": "Principal Analyst",
      "name1": "Sommer Anderson",
      "logo1": "assets/images/tmobile.webp",
      "text2": "There are so many Sr. IT top guns out there, but few could provide sound advice ... lucky me to be one of the guy who received such an advice",
      "title2": "Principal Cloud Architect",
      "name2": "Henry Pan",
      "logo2": "assets/images/pwc.webp",
      "text3": "... very professional and focused ... despite the difficult deadlines ... maintains a positive attitude",
      "title3": "Big Data Analytics",
      "name3": "Raviteja Cheruvu",
      "logo3": "assets/images/wipro.webp"
    },
    {
      "text1": "...brought a well grounded demeanor to a relationship that is often tainted from the start with a development teams sense of their quality and maturity being judged ... clearly adds value  ... brings expertise to the problems at hand gracefully",
      "title1": "Associate Director, Security Enablement",
      "name1": "Ken Crismon",
      "logo1": "assets/images/kpmg.webp",
      "text2": "... stays on top standards & best practices , and works well with so many other groups ... makes coordinating process, standards, and decision making across a multitude of groups look easy",
      "title2": "Principal Engineer",
      "name2": "Asif Sajjad",
      "logo2": "assets/images/tmobile.webp",
      "text3": "... helped us thoroughly go over our requirements and why we needed this solution ... promptly and frequently followed up until the issue was resolved.",
      "title3": "Manager",
      "name3": "Christine Davis",
      "logo3": "assets/images/takeda.png"
    },

  ]


  constructor() { }

  ngOnInit(): void {
    this.testimonialNumber = Math.floor(Math.random() * (this.testimonials.length));
  }

}
