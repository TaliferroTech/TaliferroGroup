import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nov122023Component } from './nov122023.component';

describe('Nov122023Component', () => {
  let component: Nov122023Component;
  let fixture: ComponentFixture<Nov122023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nov122023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nov122023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
