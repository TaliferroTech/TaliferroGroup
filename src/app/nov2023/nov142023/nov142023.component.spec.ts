import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov142023Component } from './nov142023.component';

describe('Nov142023Component', () => {
  let component: Nov142023Component;
  let fixture: ComponentFixture<Nov142023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov142023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov142023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
