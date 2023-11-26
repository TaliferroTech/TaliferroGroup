import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent implements OnInit {

  @Input() blog1Link = "/blog/nov-2023/exclusive-technology-partnerships-for-small-business-success";
  @Input() image1Link = "/assets/images/blog/exclusive-technology-partnerships-for-small-business-success.webp";
  @Input() title1 = "Exclusive Technology Partnerships for Small Business Success";
  @Input() description1 = "Small businesses navigate a complex digital landscape marked by rapid changes and emerging challenges. At Taliferro Group, our commitment to addressing these challenges is rooted in a deep understanding of the unique needs of small businesses. Our services are not just solutions; they are partnerships for success, available to a select few to ensure unparalleled attention and quality.";

  @Input() blog2Link = "/blog/nov-2023/the-imperative-of-cybersecurity-incident-and-governance-disclosure";
  @Input() image2Link = "assets/images/blog/the-imperative-of-cybersecurity-incident-and-governance-disclosure.webp";
  @Input() title2 = "The Imperative of Cybersecurity Incident and Governance Disclosure";
  @Input() description2 = "The recent proposal by the U.S. Securities and Exchange Commission (SEC) requiring public companies to report material cybersecurity incidents within four business days is a significant step towards enhanced transparency and risk management. However, this focus on public companies brings up an important consideration: the arguably more critical need for similar practices in private companies, especially those operating in the business-to-consumer (B2C) space.";

  constructor() { }

  ngOnInit(): void {
  }

}
