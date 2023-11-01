import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec312022Component } from './dec312022.component';

describe('Dec312022Component', () => {
  let component: Dec312022Component;
  let fixture: ComponentFixture<Dec312022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec312022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec312022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
