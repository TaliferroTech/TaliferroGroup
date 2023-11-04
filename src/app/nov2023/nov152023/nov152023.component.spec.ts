import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov152023Component } from './nov152023.component';

describe('Nov152023Component', () => {
  let component: Nov152023Component;
  let fixture: ComponentFixture<Nov152023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov152023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov152023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
