import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAreaHomeLightComponent } from './banner-area-home-light.component';

describe('BannerAreaHomeLightComponent', () => {
  let component: BannerAreaHomeLightComponent;
  let fixture: ComponentFixture<BannerAreaHomeLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAreaHomeLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAreaHomeLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
