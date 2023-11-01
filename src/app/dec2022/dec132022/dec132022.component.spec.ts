import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec132022Component } from './dec132022.component';

describe('Dec132022Component', () => {
  let component: Dec132022Component;
  let fixture: ComponentFixture<Dec132022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec132022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec132022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
