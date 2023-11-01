import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHeaderSectionComponent } from './video-header-section.component';

describe('VideoHeaderSectionComponent', () => {
  let component: VideoHeaderSectionComponent;
  let fixture: ComponentFixture<VideoHeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoHeaderSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
