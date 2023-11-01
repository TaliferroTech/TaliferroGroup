import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apr192023Component } from './apr192023.component';

describe('Apr192023Component', () => {
  let component: Apr192023Component;
  let fixture: ComponentFixture<Apr192023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apr192023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apr192023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
