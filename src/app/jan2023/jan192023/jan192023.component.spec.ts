import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan192023Component } from './jan192023.component';

describe('Jan192023Component', () => {
  let component: Jan192023Component;
  let fixture: ComponentFixture<Jan192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
