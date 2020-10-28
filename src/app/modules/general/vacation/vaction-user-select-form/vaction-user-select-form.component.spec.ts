import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VactionUserSelectFormComponent } from './vaction-user-select-form.component';

describe('VactionUserSelectFormComponent', () => {
  let component: VactionUserSelectFormComponent;
  let fixture: ComponentFixture<VactionUserSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VactionUserSelectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VactionUserSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
