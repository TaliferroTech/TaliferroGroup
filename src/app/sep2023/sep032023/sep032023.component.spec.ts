import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sep032023Component } from './sep032023.component';

describe('Sep032023Component', () => {
  let component: Sep032023Component;
  let fixture: ComponentFixture<Sep032023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sep032023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sep032023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
