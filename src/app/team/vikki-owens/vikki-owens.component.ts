import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vikki-owens',
  templateUrl: './vikki-owens.component.html',
  styleUrls: ['./vikki-owens.component.css']
})
export class VikkiOwensComponent implements OnInit {

  description = "<p class=\"wow fadeInUp\">I leverage my ability to recognize gaps in logistics, processes, services, and other details that may inhibit a vision from becoming a reality. My strengths are grounded in think-action, perfected by many years of experience in the event planning industry, which was the perfect training environment for progressing to project management, team building, and organizational development.</p>" + 

  "<p class=\"wow fadeInUp\">Accurately assessing the big picture while analyzing details will benefit any project I am involved in because I will methodically evaluate, strategize, plan, coordinate, and execute to the best of my ability — and with complete transparency.</p>" +
  
  "<p class=\"wow fadeInUp\">My experience as a business builder in multiple industries, B2B and B2C, plus continuous upskilling, has given me practical knowledge of all aspects of business creation. I have served in many different roles in the pursuit of establishing, scaling, and managing a successful enterprise. A Scrum Alliance Certified Product Owner and Scrum Master gives me great insight into how to delight software development customers, users, and stakeholders in other lines of business.</p>" +
  
  "<p class=\"wow fadeInUp\">Moreover, years of nonprofit experience add tools to my toolbox that I use to enhance how I can help organizations achieve goals. Serving as a media vice president, committee chair of logistics, and volunteer engagement for different nonprofit sectors, I incorporate best practices that best fit the situation. Others cannot offer what I do because my journey and perspective are as unique as my fingerprint.</p>"

  certification1 = "/assets/media/blog/vikki-scrum-master-cert1.png"
  certification2 = "/assets/media/blog/vikki-scrum-master-cert2.png"

  constructor() { }

  ngOnInit(): void {
  }

}
