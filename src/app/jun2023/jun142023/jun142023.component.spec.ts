import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun142023Component } from './jun142023.component';

describe('Jun142023Component', () => {
  let component: Jun142023Component;
  let fixture: ComponentFixture<Jun142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
