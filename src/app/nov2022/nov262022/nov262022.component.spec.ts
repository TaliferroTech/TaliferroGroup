import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov262022Component } from './nov262022.component';

describe('Nov262022Component', () => {
  let component: Nov262022Component;
  let fixture: ComponentFixture<Nov262022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov262022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov262022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
