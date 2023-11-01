import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb272023Component } from './feb272023.component';

describe('Feb272023Component', () => {
  let component: Feb272023Component;
  let fixture: ComponentFixture<Feb272023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb272023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb272023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
