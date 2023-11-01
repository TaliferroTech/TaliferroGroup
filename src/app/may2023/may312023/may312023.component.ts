import { Component, OnInit } from '@angular/core';
import { RandomDateService } from 'src/app/services/random-date.service';

@Component({
  selector: 'app-may312023',
  templateUrl: './may312023.component.html',
  styleUrls: ['./may312023.component.css']
})
export class May312023Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let date = RandomDateService.getRandomDate();
  }

}
