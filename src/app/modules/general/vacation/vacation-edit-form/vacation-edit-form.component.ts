import {Component, Input, OnInit} from '@angular/core';
import {PersonResponseModel} from '../../person-list/person-response.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {UrlaubCreateService} from './urlaub-create.service';
import {DateTimeUtil} from '../../date-time.util';
import {VacationRequestModel} from './vacation-request.model';

@Component({
  selector: 'app-vacation-edit-form',
  templateUrl: './vacation-edit-form.component.html',
  styleUrls: ['./vacation-edit-form.component.css']
})
export class VacationEditFormComponent implements OnInit {

  @Input() personModel: PersonResponseModel;
  public urlaubForm: FormGroup;
  public startDateModel: NgbDateStruct;
  public endDateModel: NgbDateStruct;
  public urlaubModel: VacationRequestModel = new VacationRequestModel();

  constructor(private formBuilder: FormBuilder, private activeModal: NgbActiveModal, private urlaubCreateService: UrlaubCreateService) {
    this.urlaubForm = this.buildPersonFormGroup();
  }

  ngOnInit(): void {
    this.urlaubForm.controls['lastName'].disable();
    this.urlaubForm.controls['holidayDays'].disable();
  }

  private buildPersonFormGroup() {
    return this.formBuilder.group({
      startDate: [, Validators.required],
      endDate: [, Validators.required],
      lastName: [],
      holidayDays: []
    });
  }

  public submit(): void {
    this.urlaubModel.startDate = DateTimeUtil.ngbDateStructToString(this.startDateModel, true);
    this.urlaubModel.endDate = DateTimeUtil.ngbDateStructToString(this.endDateModel, true);
    this.urlaubModel.personId = this.personModel.userId;

    if (this.urlaubForm.valid) {
      this.urlaubCreateService.doCreate(this.urlaubModel).subscribe((personModel: any) => {
      });
      this.activeModal.close('success');
    }
  }

  public closeModal(): void {
    this.activeModal.close('success');
  }

}
