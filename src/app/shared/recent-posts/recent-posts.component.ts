import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {

  iAd = 0;

  constructor() { }

  ngOnInit(): void {
    this.iAd = Math.floor(Math.random() * 5);

  }

}
