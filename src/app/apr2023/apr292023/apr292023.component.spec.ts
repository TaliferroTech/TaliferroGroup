import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr292023Component } from './apr292023.component';

describe('Apr292023Component', () => {
  let component: Apr292023Component;
  let fixture: ComponentFixture<Apr292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
