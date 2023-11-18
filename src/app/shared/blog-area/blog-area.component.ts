import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent implements OnInit {

  @Input() blog1Link = "/blog/nov-2023/a-comprehensive-guide-to-streamlining-power-app-development-with-hollywood-storyboarding";
  @Input() image1Link = "/assets/images/blog/a-comprehensive-guide-to-streamlining-power-app-development-with-hollywood-storyboarding.webp";
  @Input() title1 = "A Comprehensive Guide to Streamlining Power App Development with Hollywood Storyboarding";
  @Input() description1 = "Efficiency and clarity in design and development processes are crucial. This article introduces an innovative approach to Power App development, leveraging the Hollywood methodology of storyboarding. This technique, commonly used in filmmaking, offers a visual and structured way to conceptualize app flow and functionality, greatly enhancing the development process.";

  @Input() blog2Link = "/blog/nov-2023/pioneering-web-development-for-swift-and-accurate-digital-solutions";
  @Input() image2Link = "assets/images/blog/pioneering-web-development-for-swift-and-accurate-digital-solutions.webp";
  @Input() title2 = "Pioneering Web Development for Swift and Accurate Digital Solutions";
  @Input() description2 = "Speed and accuracy are paramount. Taliferro Group, a distinguished IT firm in Seattle, has revolutionized the web development process through its unique methodology, termed the \"Taliferro Technique.\" This approach melds agility with precision, employing lesser-known yet highly effective techniques to ensure rapid throughput without compromising on quality. This article delves into the facets of this innovative methodology and how it sets Taliferro Group apart in the world of web development.";

  constructor() { }

  ngOnInit(): void {
  }

}
