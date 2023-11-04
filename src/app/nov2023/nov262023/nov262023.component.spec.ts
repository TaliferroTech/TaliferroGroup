import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov262023Component } from './nov262023.component';

describe('Nov262023Component', () => {
  let component: Nov262023Component;
  let fixture: ComponentFixture<Nov262023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov262023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov262023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
