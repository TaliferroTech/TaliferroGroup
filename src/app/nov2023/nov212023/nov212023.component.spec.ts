import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov212023Component } from './nov212023.component';

describe('Nov212023Component', () => {
  let component: Nov212023Component;
  let fixture: ComponentFixture<Nov212023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov212023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov212023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
