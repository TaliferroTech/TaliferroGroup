import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan112023Component } from './jan112023.component';

describe('Jan112023Component', () => {
  let component: Jan112023Component;
  let fixture: ComponentFixture<Jan112023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan112023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan112023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
