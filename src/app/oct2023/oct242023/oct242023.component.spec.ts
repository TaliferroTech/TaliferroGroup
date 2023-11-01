import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct242023Component } from './oct242023.component';

describe('Oct242023Component', () => {
  let component: Oct242023Component;
  let fixture: ComponentFixture<Oct242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
