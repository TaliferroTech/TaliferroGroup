import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec292022Component } from './dec292022.component';

describe('Dec292022Component', () => {
  let component: Dec292022Component;
  let fixture: ComponentFixture<Dec292022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec292022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec292022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
