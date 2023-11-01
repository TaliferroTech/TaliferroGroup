import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec242022Component } from './dec242022.component';

describe('Dec242022Component', () => {
  let component: Dec242022Component;
  let fixture: ComponentFixture<Dec242022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec242022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec242022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
