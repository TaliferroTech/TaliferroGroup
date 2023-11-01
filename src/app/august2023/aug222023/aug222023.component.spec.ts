import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug222023Component } from './aug222023.component';

describe('Aug222023Component', () => {
  let component: Aug222023Component;
  let fixture: ComponentFixture<Aug222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
