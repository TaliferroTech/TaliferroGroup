import { Component, OnInit } from '@angular/core';
import { RandomDateService } from 'src/app/services/random-date.service';

@Component({
  selector: 'app-you-might-like',
  templateUrl: './you-might-like.component.html',
  styleUrls: ['./you-might-like.component.css']
})
export class YouMightLikeComponent implements OnInit {

  public article1 = {"description": "", "title": "", "location": "", "image": ""};
  public article2 = {"description": "", "title": "", "location": "", "image": ""};

  constructor() { }

  ngOnInit(): void {
    this.article1 = RandomDateService.getRandomArticle();
    this.article2 = RandomDateService.getRandomArticle();

  }

}
