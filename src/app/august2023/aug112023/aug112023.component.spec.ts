import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug112023Component } from './aug112023.component';

describe('Aug112023Component', () => {
  let component: Aug112023Component;
  let fixture: ComponentFixture<Aug112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
