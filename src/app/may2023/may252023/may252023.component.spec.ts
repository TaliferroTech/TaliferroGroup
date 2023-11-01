import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May252023Component } from './may252023.component';

describe('May252023Component', () => {
  let component: May252023Component;
  let fixture: ComponentFixture<May252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
