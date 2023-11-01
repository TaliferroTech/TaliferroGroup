import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jun242023Component } from './jun242023.component';

describe('Jun242023Component', () => {
  let component: Jun242023Component;
  let fixture: ComponentFixture<Jun242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jun242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jun242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
