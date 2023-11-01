import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May122023Component } from './may122023.component';

describe('May122023Component', () => {
  let component: May122023Component;
  let fixture: ComponentFixture<May122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
