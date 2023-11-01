import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public lady = "poses-lady.png";

  constructor() { }

  ngOnInit(): void {
    let ld = Math.floor(Math.random() * 4);
    if (ld === 1)
      this.lady = "poses-lady.png";
    else if (ld === 2)
      this.lady = "poses-lady2.png";
    else if (ld === 3)
      this.lady = "poses-lady3.png";

  }

}
