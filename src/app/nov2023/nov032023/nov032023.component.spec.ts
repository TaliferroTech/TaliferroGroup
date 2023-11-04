import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov032023Component } from './nov032023.component';

describe('Nov032023Component', () => {
  let component: Nov032023Component;
  let fixture: ComponentFixture<Nov032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
