import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov052023Component } from './nov052023.component';

describe('Nov052023Component', () => {
  let component: Nov052023Component;
  let fixture: ComponentFixture<Nov052023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov052023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov052023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
