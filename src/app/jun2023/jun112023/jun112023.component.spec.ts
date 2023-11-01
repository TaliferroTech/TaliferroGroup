import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun112023Component } from './jun112023.component';

describe('Jun112023Component', () => {
  let component: Jun112023Component;
  let fixture: ComponentFixture<Jun112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
