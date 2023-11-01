import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-area-light',
  templateUrl: './header-area-light.component.html',
  styleUrls: ['./header-area-light.component.css']
})
export class HeaderAreaLightComponent implements OnInit {

  @Input() home: boolean = true;
  private _fragment: any;

  constructor(private _route: ActivatedRoute, private viewportScroller: ViewportScroller, private _router: Router) { }

  ngOnInit(): void {
    this._route.fragment.subscribe(fragment => {
      this._fragment = fragment;
      this.scrollToFragment();
    })
  }

  scrollToService(anchor: string) {
    if (this.home){
      setTimeout(() => this.viewportScroller.scrollToAnchor(anchor), 1000);
    }
    else {
      // window.location.href = '/#' + anchor;
      this._router.navigate(['/'], {fragment: anchor});
    }

  }

  scrollToFragment() {
    try {
      if (this._fragment) {
        // console.log("scrollToFragment", this._fragment)
        setTimeout(() => this.viewportScroller.scrollToAnchor(this._fragment), 500);
      }

    } catch (error) {
      console.error("Error", error)
    }
  }


}
