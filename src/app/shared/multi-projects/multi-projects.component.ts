import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-projects',
  templateUrl: './multi-projects.component.html',
  styleUrls: ['./multi-projects.component.css']
})
export class MultiProjectsComponent implements OnInit {

  public showProjects = true;
  public buttonText1 = "Show More";
  public buttonText2 = "Hide More";

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showProjects = !this.showProjects;
  }

}
