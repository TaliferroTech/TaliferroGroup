import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar042023Component } from './mar042023.component';

describe('Mar042023Component', () => {
  let component: Mar042023Component;
  let fixture: ComponentFixture<Mar042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
