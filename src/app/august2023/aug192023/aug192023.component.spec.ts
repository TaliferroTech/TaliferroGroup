import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug192023Component } from './aug192023.component';

describe('Aug192023Component', () => {
  let component: Aug192023Component;
  let fixture: ComponentFixture<Aug192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
