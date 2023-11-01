import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov272022Component } from './nov272022.component';

describe('Nov272022Component', () => {
  let component: Nov272022Component;
  let fixture: ComponentFixture<Nov272022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov272022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov272022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
