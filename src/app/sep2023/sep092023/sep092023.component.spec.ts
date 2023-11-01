import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep092023Component } from './sep092023.component';

describe('Sep092023Component', () => {
  let component: Sep092023Component;
  let fixture: ComponentFixture<Sep092023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep092023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep092023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
