import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun292023Component } from './jun292023.component';

describe('Jun292023Component', () => {
  let component: Jun292023Component;
  let fixture: ComponentFixture<Jun292023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun292023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun292023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
