import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr042023Component } from './apr042023.component';

describe('Apr042023Component', () => {
  let component: Apr042023Component;
  let fixture: ComponentFixture<Apr042023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr042023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr042023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
