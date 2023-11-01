import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov172022Component } from './nov172022.component';

describe('Nov172022Component', () => {
  let component: Nov172022Component;
  let fixture: ComponentFixture<Nov172022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov172022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov172022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
