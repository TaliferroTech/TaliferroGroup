import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov252023Component } from './nov252023.component';

describe('Nov252023Component', () => {
  let component: Nov252023Component;
  let fixture: ComponentFixture<Nov252023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov252023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov252023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
