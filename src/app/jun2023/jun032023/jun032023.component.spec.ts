import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun032023Component } from './jun032023.component';

describe('Jun032023Component', () => {
  let component: Jun032023Component;
  let fixture: ComponentFixture<Jun032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
