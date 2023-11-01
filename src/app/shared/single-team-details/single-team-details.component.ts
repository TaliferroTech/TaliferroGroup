import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-team-details',
  templateUrl: './single-team-details.component.html',
  styleUrls: ['./single-team-details.component.css']
})
export class SingleTeamDetailsComponent implements OnInit {

  @Input() teamName: string = '';
  @Input() title: string = '';
  @Input() email: string = '';
  @Input() linkedIn: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() certification1 = '';
  @Input() certification2 = '';
  @Input() phone = '';


  constructor() { }

  ngOnInit(): void {
  }

}
