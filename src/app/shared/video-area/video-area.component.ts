import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-area',
  templateUrl: './video-area.component.html',
  styleUrls: ['./video-area.component.css']
})
export class VideoAreaComponent implements OnInit {

  @Input() title = "";
  @Input() description1 = "";
  @Input() description2 = "";
  @Input() videoNumber = 0;
  

  constructor() { }

  ngOnInit(): void {
    if (this.videoNumber == 0)
    this.videoNumber = Math.floor(Math.random() * 14);
    console.log(this.videoNumber)
  }

}
