import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov092023Component } from './nov092023.component';

describe('Nov092023Component', () => {
  let component: Nov092023Component;
  let fixture: ComponentFixture<Nov092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
