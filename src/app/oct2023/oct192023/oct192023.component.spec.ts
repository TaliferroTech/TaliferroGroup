import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct192023Component } from './oct192023.component';

describe('Oct192023Component', () => {
  let component: Oct192023Component;
  let fixture: ComponentFixture<Oct192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
