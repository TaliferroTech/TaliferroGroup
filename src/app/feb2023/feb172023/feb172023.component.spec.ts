import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb172023Component } from './feb172023.component';

describe('Feb172023Component', () => {
  let component: Feb172023Component;
  let fixture: ComponentFixture<Feb172023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feb172023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feb172023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
