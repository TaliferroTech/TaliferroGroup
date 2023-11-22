import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent implements OnInit {

  @Input() blog1Link = "/blog/nov-2023/the-exclusive-benefits-of-our-limited-api-certification";
  @Input() image1Link = "/assets/images/blog/the-exclusive-benefits-of-our-limited-api-certification.webp";
  @Input() title1 = "The Exclusive Benefits of Our Limited API Certification";
  @Input() description1 = "APIs are integral to business operations, ensuring they are secure, efficient, and developer-friendly is vital. Taliferro Group's proprietary API certification offers an exclusive opportunity to achieve this, with a distinct approach that sets it apart from typical consultancy-driven certifications. Having conducted certifications for major players like AT&T and T-Mobile, we understand the industry's nuances and the value of an unbiased, meticulous review process.";

  @Input() blog2Link = "/blog/nov-2023/the-imperative-of-cybersecurity-incident-and-governance-disclosure";
  @Input() image2Link = "assets/images/blog/the-imperative-of-cybersecurity-incident-and-governance-disclosure.webp";
  @Input() title2 = "The Imperative of Cybersecurity Incident and Governance Disclosure";
  @Input() description2 = "The recent proposal by the U.S. Securities and Exchange Commission (SEC) requiring public companies to report material cybersecurity incidents within four business days is a significant step towards enhanced transparency and risk management. However, this focus on public companies brings up an important consideration: the arguably more critical need for similar practices in private companies, especially those operating in the business-to-consumer (B2C) space.";

  constructor() { }

  ngOnInit(): void {
  }

}
