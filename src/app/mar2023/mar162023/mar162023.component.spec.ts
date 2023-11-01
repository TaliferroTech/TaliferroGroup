import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar162023Component } from './mar162023.component';

describe('Mar162023Component', () => {
  let component: Mar162023Component;
  let fixture: ComponentFixture<Mar162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
