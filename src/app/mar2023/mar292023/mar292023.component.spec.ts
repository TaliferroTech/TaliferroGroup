import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar292023Component } from './mar292023.component';

describe('Mar292023Component', () => {
  let component: Mar292023Component;
  let fixture: ComponentFixture<Mar292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
