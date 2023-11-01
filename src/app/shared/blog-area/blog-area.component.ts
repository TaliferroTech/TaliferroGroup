import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent implements OnInit {

  @Input() blog1Link = "/blog/oct-2023/the-real-secret-to-seo";
  @Input() image1Link = "/assets/images/blog/the-real-secret-to-seo.webp";
  @Input() title1 = "The Real Secret to SEO";
  @Input() description1 = "Search Engine Optimization (SEO) is an evolving discipline that demands a nuanced understanding of a plethora of factors contributing to a website's visibility. While most marketers acknowledge the indispensability of keywords, the utilization of advanced algorithms like Term Frequency-Inverse Document Frequency (TF-IDF) remains an untapped opportunity. This article aims to elucidate how leveraging TF-IDF algorithms can act as a pivotal element in enhancing keyword optimization and thereby augmenting your SEO strategies.";

  @Input() blog2Link = "/blog/oct-2023/digital-transformation-best-practices";
  @Input() image2Link = "assets/images/blog/digital-transformation-best-practices.webp";
  @Input() title2 = "Digital Transformation Best Practices";
  @Input() description2 = "Digital transformation is no longer a buzzword; it's an operational imperative. Whether you're a seasoned enterprise or an emerging start-up, the journey toward digitization can be both exhilarating and challenging. To make the process more manageable and result-oriented, we've compiled a list of best practices that are fundamental for achieving unparalleled success in your digital transformation endeavors. These guidelines are curated to offer measurable benefits, so read on to boost your strategy.";

  constructor() { }

  ngOnInit(): void {
  }

}
