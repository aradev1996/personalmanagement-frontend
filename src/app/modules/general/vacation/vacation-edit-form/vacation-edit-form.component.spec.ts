import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationEditFormComponent } from './vacation-edit-form.component';

describe('VacationEditFormComponent', () => {
  let component: VacationEditFormComponent;
  let fixture: ComponentFixture<VacationEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
