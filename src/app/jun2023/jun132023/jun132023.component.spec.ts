import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun132023Component } from './jun132023.component';

describe('Jun132023Component', () => {
  let component: Jun132023Component;
  let fixture: ComponentFixture<Jun132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
