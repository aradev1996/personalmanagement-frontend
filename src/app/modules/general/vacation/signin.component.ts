import {Component, OnInit} from '@angular/core';
import {VacationResponseModel} from './vacation-response.model';
import {VactionUserSelectFormComponent} from './vaction-user-select-form/vaction-user-select-form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UrlaubApiService} from './urlaub-api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public isLoading: boolean;
  public vacationList: VacationResponseModel[];

  constructor(private modalService: NgbModal, private urlaubApiService: UrlaubApiService) {
  }

  ngOnInit(): void {
    this.load();
  }

  openUserSelectForm() {
    const modalRef = this.modalService.open(VactionUserSelectFormComponent, {scrollable: true, backdrop: 'static'});
    modalRef.result.then(() => this.reload());
  }

  private reload(): void {
    window.location.reload();
  }

  public load() {
    this.isLoading = true;
    this.urlaubApiService.doGetAll().subscribe((vacayList: any) => {
      this.vacationList = vacayList;
      this.isLoading = false;
    });
  }

}
