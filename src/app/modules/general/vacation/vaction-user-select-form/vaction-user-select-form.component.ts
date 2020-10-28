import {Component, OnInit} from '@angular/core';
import {PersonApiService} from '../../person-list/person-api.service';
import {PersonResponseModel} from '../../person-list/person-response.model';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {VacationEditFormComponent} from '../vacation-edit-form/vacation-edit-form.component';

@Component({
  selector: 'app-vaction-user-select-form',
  templateUrl: './vaction-user-select-form.component.html',
  styleUrls: ['./vaction-user-select-form.component.css']
})
export class VactionUserSelectFormComponent implements OnInit {

  public personModel: PersonResponseModel[];
  public isLoading: boolean;
  public value: any;
  public selectedPerson: PersonResponseModel;

  constructor(private personApiService: PersonApiService, private activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.load();
  }

  public load() {
    this.isLoading = true;
    this.personApiService.doGetAll().subscribe((personModel: any) => {
      this.personModel = personModel;
      this.isLoading = false;
    });
  }

  public closeModal(): void {
    this.activeModal.close('success');
  }

  public submit(): void {
    const modalRef = this.modalService.open(VacationEditFormComponent, {scrollable: true, backdrop: 'static'});
    modalRef.componentInstance.personModel = this.selectedPerson;
  }

  public onChangeA(): void {
    console.log('Selected:', this.selectedPerson);
  }

}
