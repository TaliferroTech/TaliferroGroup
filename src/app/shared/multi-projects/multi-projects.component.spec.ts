import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiProjectsComponent } from './multi-projects.component';

describe('MultiProjectsComponent', () => {
  let component: MultiProjectsComponent;
  let fixture: ComponentFixture<MultiProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
