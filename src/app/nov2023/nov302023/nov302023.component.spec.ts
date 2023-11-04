import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov302023Component } from './nov302023.component';

describe('Nov302023Component', () => {
  let component: Nov302023Component;
  let fixture: ComponentFixture<Nov302023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov302023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov302023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
