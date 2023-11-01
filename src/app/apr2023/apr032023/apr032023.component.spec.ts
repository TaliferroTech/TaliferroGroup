import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr032023Component } from './apr032023.component';

describe('Apr032023Component', () => {
  let component: Apr032023Component;
  let fixture: ComponentFixture<Apr032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
