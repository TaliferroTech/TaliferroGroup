import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post14',
  templateUrl: './post14.component.html',
  styleUrls: ['./post14.component.css']
})
export class Post14Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
