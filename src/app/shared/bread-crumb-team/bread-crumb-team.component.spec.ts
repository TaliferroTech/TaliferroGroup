import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbTeamComponent } from './bread-crumb-team.component';

describe('BreadCrumbTeamComponent', () => {
  let component: BreadCrumbTeamComponent;
  let fixture: ComponentFixture<BreadCrumbTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumbTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadCrumbTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
