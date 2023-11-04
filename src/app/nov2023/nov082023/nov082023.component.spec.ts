import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov082023Component } from './nov082023.component';

describe('Nov082023Component', () => {
  let component: Nov082023Component;
  let fixture: ComponentFixture<Nov082023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov082023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov082023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
