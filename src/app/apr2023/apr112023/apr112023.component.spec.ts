import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr112023Component } from './apr112023.component';

describe('Apr112023Component', () => {
  let component: Apr112023Component;
  let fixture: ComponentFixture<Apr112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
