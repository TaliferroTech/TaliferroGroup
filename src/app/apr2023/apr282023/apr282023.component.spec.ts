import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr282023Component } from './apr282023.component';

describe('Apr282023Component', () => {
  let component: Apr282023Component;
  let fixture: ComponentFixture<Apr282023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr282023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr282023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
