import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTeamDetailsComponent } from './single-team-details.component';

describe('SingleTeamDetailsComponent', () => {
  let component: SingleTeamDetailsComponent;
  let fixture: ComponentFixture<SingleTeamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTeamDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
