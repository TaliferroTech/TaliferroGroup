import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov132023Component } from './nov132023.component';

describe('Nov132023Component', () => {
  let component: Nov132023Component;
  let fixture: ComponentFixture<Nov132023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov132023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov132023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
