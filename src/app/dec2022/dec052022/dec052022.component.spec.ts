import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec052022Component } from './dec052022.component';

describe('Dec052022Component', () => {
  let component: Dec052022Component;
  let fixture: ComponentFixture<Dec052022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec052022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec052022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
