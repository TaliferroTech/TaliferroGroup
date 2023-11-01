import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb202023Component } from './feb202023.component';

describe('Feb202023Component', () => {
  let component: Feb202023Component;
  let fixture: ComponentFixture<Feb202023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb202023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb202023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
