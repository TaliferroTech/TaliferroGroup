import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec122022Component } from './dec122022.component';

describe('Dec122022Component', () => {
  let component: Dec122022Component;
  let fixture: ComponentFixture<Dec122022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec122022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec122022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
