import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-tyrone-showers-bio',
  templateUrl: './tyrone-showers-bio.component.html',
  styleUrls: ['./tyrone-showers-bio.component.css']
})
export class TyroneShowersBioComponent implements OnInit {

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  public dScript(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://path/to/your/script';
    s.text = ``;
    this.renderer2.appendChild(document.body, s);
  }

}
  