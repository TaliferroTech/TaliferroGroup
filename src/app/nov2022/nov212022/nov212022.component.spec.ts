import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov212022Component } from './nov212022.component';

describe('Nov212022Component', () => {
  let component: Nov212022Component;
  let fixture: ComponentFixture<Nov212022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov212022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov212022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
