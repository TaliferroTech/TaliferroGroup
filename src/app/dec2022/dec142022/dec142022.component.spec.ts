import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dec142022Component } from './dec142022.component';

describe('Dec142022Component', () => {
  let component: Dec142022Component;
  let fixture: ComponentFixture<Dec142022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dec142022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dec142022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
