import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov242022Component } from './nov242022.component';

describe('Nov242022Component', () => {
  let component: Nov242022Component;
  let fixture: ComponentFixture<Nov242022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov242022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov242022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
