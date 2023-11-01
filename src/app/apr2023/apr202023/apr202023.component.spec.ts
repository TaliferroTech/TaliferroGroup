import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr202023Component } from './apr202023.component';

describe('Apr202023Component', () => {
  let component: Apr202023Component;
  let fixture: ComponentFixture<Apr202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
