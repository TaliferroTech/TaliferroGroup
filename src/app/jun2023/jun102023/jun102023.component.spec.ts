import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun102023Component } from './jun102023.component';

describe('Jun102023Component', () => {
  let component: Jun102023Component;
  let fixture: ComponentFixture<Jun102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
