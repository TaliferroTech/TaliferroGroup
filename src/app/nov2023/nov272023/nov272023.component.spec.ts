import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov272023Component } from './nov272023.component';

describe('Nov272023Component', () => {
  let component: Nov272023Component;
  let fixture: ComponentFixture<Nov272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
