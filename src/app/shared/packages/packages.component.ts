import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  public  yearly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.yearly = !this.yearly;
  }

}
