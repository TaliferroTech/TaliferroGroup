import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb242023Component } from './feb242023.component';

describe('Feb242023Component', () => {
  let component: Feb242023Component;
  let fixture: ComponentFixture<Feb242023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb242023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb242023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
