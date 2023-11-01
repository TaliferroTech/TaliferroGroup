import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec012022Component } from './dec012022.component';

describe('Dec012022Component', () => {
  let component: Dec012022Component;
  let fixture: ComponentFixture<Dec012022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec012022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec012022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
