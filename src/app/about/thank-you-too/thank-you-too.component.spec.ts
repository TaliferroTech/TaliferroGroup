import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouTooComponent } from './thank-you-too.component';

describe('ThankYouTooComponent', () => {
  let component: ThankYouTooComponent;
  let fixture: ComponentFixture<ThankYouTooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouTooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankYouTooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
