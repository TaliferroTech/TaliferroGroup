import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr092023Component } from './apr092023.component';

describe('Apr092023Component', () => {
  let component: Apr092023Component;
  let fixture: ComponentFixture<Apr092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
