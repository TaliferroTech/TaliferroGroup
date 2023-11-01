import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-area-home-light',
  templateUrl: './banner-area-home-light.component.html',
  styleUrls: ['./banner-area-home-light.component.css']
})
export class BannerAreaHomeLightComponent implements OnInit {

  @Input() headingNumber = 0;
  @Input() thankYou = false;

  public headlines = [
    "Making Your Organization Better and Smarter",
    "Boosting Your Organization the Smart Way",
    "Taking Your Business to the Next Level",
    "Your Organization, But Better",
    "Making Organizations Smart and Safe",
    "Turn Data into Dollars",
    "Smart Moves for Your Business",
    "We're API Wizards",
    "Smart Solutions for Growing Businesses"
  ]

  public subHealine = [
    "From Safe Websites to Better Online Stores, We've Got You Covered",
    "From Faster IT to Protecting Your Data, We Do It All",
    "Helping You Sell More and Stay Safe Online",
    "We Make Your IT Fast, Safe, and Easy to Use",
    "We Help Your Company Do Better Online and Keep It Securey",
    "Unlock Hidden Cash",
    "Better Information Technology, More Sales, and No Worries",
    "Make Your Software Talk Like Never Before",
    "Making Your Web Presence Profitable and Secure"
  ]
  public subText = [
    "You're really good at what you do, and we're really good with tech. Together, let's find hidden money in your data. Click to start this amazing journey.",
    "No tricks or strings attached. We'll show you the good and bad in your tech setup, so you can see how awesome we are at fixing things. Click to start exploring.",
    "No money down, just check us out. Spend a month trying our awesome IT services and feel the freedom of not worrying about tech. Click to start your test run.",
    "You want the best, so why settle? Our forward-thinking developers are more than just good, we're great. Click to upgrade to the best in software development.",
    "Think your data is just numbers? Think again. We can help you find hidden money in your data. Click to get started.",
    "Your data has secrets, and some of those secrets are ways to make more money. Let us help you find out how.",
    "We're super sure you'll be amazed by how we can upgrade your tech. If you're not happy, you'll get all your money back.",
    "Our expertise in API and API Gateways means your software can communicate way more smoothly. Click to see how we make tech magic happen.",
    "We know e-commerce inside and out, just like you do. Let us help you turn your online store into a money-making machine you won't believe. Click to boost your sales now."
  ]

  public buttonText = [
    "Find My Hidden Revenue",
    "Free Audit",
    "One Month Free",
    "I Want the Best",
    "Get My Money Now",
    "Find My Money",
    "Amaze Me",
    "Make Tech Magic Happen",
    "Boost My Sales"
  ]

  public whichHeadline = 0;

  constructor() { }

  ngOnInit(): void {
    if ((this.headingNumber > 0) && (this.headingNumber <= this.headlines.length)) {
      // console.log("HeadingNumber =", this.headingNumber, this.headlines.length);
      this.whichHeadline = this.headingNumber;
    }
    else {
      this.whichHeadline = Math.floor(Math.random() * (this.headlines.length));
    }

  }

}
