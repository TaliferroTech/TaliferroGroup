import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tyrone-showers',
  templateUrl: './tyrone-showers.component.html',
  styleUrls: ['./tyrone-showers.component.css']
})
export class TyroneShowersComponent implements OnInit {

  public description = "<p class=\"wow fadeInUp\"> Tyrone Showers is a Partner at Taliferro Group, specializing in delivering ROI-focused solutions across various IT domains. With expertise ranging from Agile Project Management to Machine Learning, he is committed to driving both revenue growth and operational efficiency for clients. </p>"

  constructor() { }

  ngOnInit(): void {
  }

}
