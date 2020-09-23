import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {PersonResponseModel} from '../person-response.model';
import {DateTimeUtil} from '../../date-time.util';
import {PersonCreateUpdateService} from './person-create-update.service';


@Component({
  selector: 'app-person-edit-form',
  templateUrl: './person-edit-form.component.html',
  styleUrls: ['./person-edit-form.component.css']
})
export class PersonEditFormComponent implements OnInit {

  @Input() personModel: PersonResponseModel;
  birthdayModel: NgbDateStruct;
  aufnahmeDateModel: NgbDateStruct;
  austrittDateModel: NgbDateStruct;
  date: { year: number, month: number };


  constructor(private activeModal: NgbActiveModal, private personApiService: PersonCreateUpdateService) {
  }

  ngOnInit(): void {
    if (this.personModel) {
      this.aufnahmeDateModel = DateTimeUtil.stringToNgbDateStruct(this.personModel.recordingDate);
      this.birthdayModel = DateTimeUtil.stringToNgbDateStruct(this.personModel.birthDate);
      this.austrittDateModel = DateTimeUtil.stringToNgbDateStruct(this.personModel.leavingDate);
    } else {
      this.personModel = new PersonResponseModel();
    }
  }

  public closeModal(): void {
    this.activeModal.close('success');
  }

  public getStatus(): boolean {
    return this.personModel.status;
  }

  public submit(): void {
    this.personModel.leavingDate = DateTimeUtil.ngbDateStructToString(this.austrittDateModel, true);
    this.personModel.recordingDate = DateTimeUtil.ngbDateStructToString(this.aufnahmeDateModel, true);
    this.personModel.birthDate = DateTimeUtil.ngbDateStructToString(this.birthdayModel, true);

    if (this.personModel.userId) {
      this.personApiService.doUpdate(this.personModel.userId, this.personModel).subscribe((personModel: any) => {
      });
    } else {
      this.personApiService.doCreate(this.personModel).subscribe((personModel: any) => {
      });
    }


    this.activeModal.close('success');
  }
}
