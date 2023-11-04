import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov242023Component } from './nov242023.component';

describe('Nov242023Component', () => {
  let component: Nov242023Component;
  let fixture: ComponentFixture<Nov242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
