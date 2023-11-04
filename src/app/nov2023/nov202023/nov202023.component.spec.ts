import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov202023Component } from './nov202023.component';

describe('Nov202023Component', () => {
  let component: Nov202023Component;
  let fixture: ComponentFixture<Nov202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
