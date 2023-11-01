import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar242023Component } from './mar242023.component';

describe('Mar242023Component', () => {
  let component: Mar242023Component;
  let fixture: ComponentFixture<Mar242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mar242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
