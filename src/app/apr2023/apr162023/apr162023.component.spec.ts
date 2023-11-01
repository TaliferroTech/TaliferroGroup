import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr162023Component } from './apr162023.component';

describe('Apr162023Component', () => {
  let component: Apr162023Component;
  let fixture: ComponentFixture<Apr162023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr162023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr162023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
