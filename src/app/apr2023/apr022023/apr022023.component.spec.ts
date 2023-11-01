import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr022023Component } from './apr022023.component';

describe('Apr022023Component', () => {
  let component: Apr022023Component;
  let fixture: ComponentFixture<Apr022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
