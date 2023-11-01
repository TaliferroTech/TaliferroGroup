import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public iVideo = 0;
  public headingNumber = 0;
  private _queryProjectParamSubscription = Subscription;
  videoURL = "assets/video/taliferro-it-connect-the-genesis-of-a-new-technological-landscape.mp4"

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.iVideo = Math.floor(Math.random() * 6);
    if (this.iVideo === 1)
      this.videoURL = "assets/video/taliferro-it-connect-the-genesis-of-a-new-technological-landscape.mp4";
    else if (this.iVideo === 2)
      this.videoURL = "assets/video/the-expense-myth.mp4";
    else if (this.iVideo === 3)
      this.videoURL = "assets/video/why-taliferro-group.mp4"
    else if (this.iVideo === 4)
      this.videoURL = "assets/video/roi-or-no-buy.mp4"
    else if (this.iVideo === 5)
      this.videoURL = "assets/video/efficienc-manifested-revenue-realized.mp4"

  }

}
