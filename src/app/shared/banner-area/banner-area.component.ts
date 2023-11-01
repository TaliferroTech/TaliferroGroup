import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

export interface EmailAddress {
  emailAddress: string;
  emailAddressType: string;
}

export interface Note {
  name?: string;
  text: string;
}

export interface Contact {
  firstName: string;
  lastName: string;
  emails: Array<EmailAddress>;
  notes: Array<Note>;
  companyId: string;
  requestType: string;
  companyName: string;
  website: string;
};


@Component({
  selector: 'app-banner-area',
  templateUrl: './banner-area.component.html',
  styleUrls: ['./banner-area.component.css']
})
export class BannerAreaComponent implements OnInit {
  public volume : boolean = false;

  public headlines = [
    "Upgrade Your IT Game Today: Partner with Us and Streamline Your Business!",
    "Say Goodbye to IT Headaches: Let Us Be Your Trusted IT Department!",
    "Revolutionize Your Tech Infrastructure: Trust Our Expert IT Services!",
    "Maximize Your Productivity: Let Us Take Care of Your IT Needs!",
    "Unleash Your Business's Potential: Partner with Us for Top-Notch IT Support!",
    "Pioneering Your Digital Transformation Journey",
    "Your Comprehensive Outsourced IT Department"
  ]

  @Input() videoSource = "assets/video/home-page.mp4";
  @Input() posterSource = "/assets/images/banner1.webp"

  public whichHeadline = 0;

  public message?: any;
  public captcha = '';

  public contact = <Contact>{
    firstName: '',
    lastName: '',
    emails: [],
    notes: [],
    companyId: 'Taliferro',
    companyName: '',
    requestType: '',
    website: ''
  }

  public email = <EmailAddress>{
    emailAddress: '',
    emailAddressType: 'Business',
  }

  public note = <Note>{
    name: 'Message',
    text: ''
  }

  constructor(private _router: Router, private _dataService: DataService) { }

  ngOnInit(): void {

    // this.contact.emails.push(this.email);
    // this.contact.notes.push(this.note);
    // this.whichHeadline = Math.floor(Math.random() * (this.headlines.length - 1));
  }

  toggleMute() {

    let video: any
    video = document.getElementById("background-video");

    video.muted = !video.muted;
    this.volume = !this.volume;
  }

  onSubmit(): void {
    this._dataService.add(environment.CONTACTS, this.contact);
    this._router.navigate(['thank-you-too']);
    this.message = "Thank You! Some one will get back to you shortly.";
  }

  resolved(captchaResponse: string): void {
    this.captcha = captchaResponse;
  }

}
