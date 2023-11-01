import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr072023Component } from './apr072023.component';

describe('Apr072023Component', () => {
  let component: Apr072023Component;
  let fixture: ComponentFixture<Apr072023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr072023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr072023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
