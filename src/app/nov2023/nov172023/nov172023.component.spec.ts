import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov172023Component } from './nov172023.component';

describe('Nov172023Component', () => {
  let component: Nov172023Component;
  let fixture: ComponentFixture<Nov172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
