import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov112023Component } from './nov112023.component';

describe('Nov112023Component', () => {
  let component: Nov112023Component;
  let fixture: ComponentFixture<Nov112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
