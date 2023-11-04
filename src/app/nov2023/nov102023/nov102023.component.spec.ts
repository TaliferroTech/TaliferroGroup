import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov102023Component } from './nov102023.component';

describe('Nov102023Component', () => {
  let component: Nov102023Component;
  let fixture: ComponentFixture<Nov102023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov102023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov102023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
