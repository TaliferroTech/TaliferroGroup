import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.css']
})
export class BlogAreaComponent implements OnInit {

  @Input() blog1Link = "/blog/nov-2023/ai-driven-dynamic-pricing";
  @Input() image1Link = "/assets/images/blog/ai-driven-dynamic-pricing.webp";
  @Input() title1 = "AI-Driven Dynamic Pricing";
  @Input() description1 = "The art of pricing cannot be overstated. It is a critical factor that not only influences consumer behavior but also defines the profitability and market positioning of a business. Dynamic pricing, powered by artificial intelligence (AI), has emerged as a sophisticated strategy that enables businesses to fine-tune their pricing models to align with market demands, consumer willingness to pay, and inventory levels. The deployment of AI in this realm is akin to finding the philosopher’s stone of pricing strategies, where the 'sweet spot' maximizes revenue and sustains customer loyalty.";

  @Input() blog2Link = "/blog/nov-2023/digital-transformation-best-practices";
  @Input() image2Link = "assets/images/blog/digital-transformation-best-practices.webp";
  @Input() title2 = "Digital Transformation Best Practices";
  @Input() description2 = "Digital transformation is no longer a buzzword; it's an operational imperative. Whether you're a seasoned enterprise or an emerging start-up, the journey toward digitization can be both exhilarating and challenging. To make the process more manageable and result-oriented, we've compiled a list of best practices that are fundamental for achieving unparalleled success in your digital transformation endeavors. These guidelines are curated to offer measurable benefits, so read on to boost your strategy.";

  constructor() { }

  ngOnInit(): void {
  }

}
