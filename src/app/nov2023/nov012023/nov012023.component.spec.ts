import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov012023Component } from './nov012023.component';

describe('Nov012023Component', () => {
  let component: Nov012023Component;
  let fixture: ComponentFixture<Nov012023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov012023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov012023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
