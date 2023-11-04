import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov192023Component } from './nov192023.component';

describe('Nov192023Component', () => {
  let component: Nov192023Component;
  let fixture: ComponentFixture<Nov192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
