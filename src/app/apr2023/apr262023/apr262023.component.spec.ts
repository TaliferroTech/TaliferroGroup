import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr262023Component } from './apr262023.component';

describe('Apr262023Component', () => {
  let component: Apr262023Component;
  let fixture: ComponentFixture<Apr262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
