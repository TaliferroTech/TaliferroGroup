import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent implements OnInit {

  constructor(public loader: LoadingService) { }

  ngOnInit(): void {
    console.log("spinning", this.loader.getLoading());
  }


}
