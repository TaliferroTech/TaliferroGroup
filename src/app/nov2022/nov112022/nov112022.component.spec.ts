import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov112022Component } from './nov112022.component';

describe('Nov112022Component', () => {
  let component: Nov112022Component;
  let fixture: ComponentFixture<Nov112022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov112022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov112022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
