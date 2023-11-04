import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov222023Component } from './nov222023.component';

describe('Nov222023Component', () => {
  let component: Nov222023Component;
  let fixture: ComponentFixture<Nov222023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov222023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov222023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
