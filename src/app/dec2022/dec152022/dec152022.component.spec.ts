import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec152022Component } from './dec152022.component';

describe('Dec152022Component', () => {
  let component: Dec152022Component;
  let fixture: ComponentFixture<Dec152022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec152022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec152022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
