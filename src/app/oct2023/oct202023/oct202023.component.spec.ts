import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct202023Component } from './oct202023.component';

describe('Oct202023Component', () => {
  let component: Oct202023Component;
  let fixture: ComponentFixture<Oct202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oct202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
