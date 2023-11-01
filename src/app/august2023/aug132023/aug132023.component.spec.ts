import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug132023Component } from './aug132023.component';

describe('Aug132023Component', () => {
  let component: Aug132023Component;
  let fixture: ComponentFixture<Aug132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aug132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
