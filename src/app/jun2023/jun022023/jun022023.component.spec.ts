import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun022023Component } from './jun022023.component';

describe('Jun022023Component', () => {
  let component: Jun022023Component;
  let fixture: ComponentFixture<Jun022023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun022023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun022023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
