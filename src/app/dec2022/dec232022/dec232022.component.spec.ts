import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec232022Component } from './dec232022.component';

describe('Dec232022Component', () => {
  let component: Dec232022Component;
  let fixture: ComponentFixture<Dec232022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec232022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec232022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
