import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun192023Component } from './jun192023.component';

describe('Jun192023Component', () => {
  let component: Jun192023Component;
  let fixture: ComponentFixture<Jun192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
