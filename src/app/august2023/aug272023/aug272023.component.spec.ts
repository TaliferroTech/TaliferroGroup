import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug272023Component } from './aug272023.component';

describe('Aug272023Component', () => {
  let component: Aug272023Component;
  let fixture: ComponentFixture<Aug272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
