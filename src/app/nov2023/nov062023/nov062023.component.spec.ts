import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov062023Component } from './nov062023.component';

describe('Nov062023Component', () => {
  let component: Nov062023Component;
  let fixture: ComponentFixture<Nov062023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov062023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov062023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
