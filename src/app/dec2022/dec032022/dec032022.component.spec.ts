import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec032022Component } from './dec032022.component';

describe('Dec032022Component', () => {
  let component: Dec032022Component;
  let fixture: ComponentFixture<Dec032022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec032022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec032022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
