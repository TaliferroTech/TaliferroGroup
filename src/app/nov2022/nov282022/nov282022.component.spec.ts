import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov282022Component } from './nov282022.component';

describe('Nov282022Component', () => {
  let component: Nov282022Component;
  let fixture: ComponentFixture<Nov282022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov282022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov282022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
