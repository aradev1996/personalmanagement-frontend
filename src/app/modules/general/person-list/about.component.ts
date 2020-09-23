import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PersonEditFormComponent} from './person-edit-form/person-edit-form.component';
import {PersonApiService} from './person-api.service';
import {PersonResponseModel} from './person-response.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public personModel: PersonResponseModel[];
  public isLoading: boolean;

  constructor(private modalService: NgbModal, private personApiService: PersonApiService, private router: Router) {
    this.isLoading = false;
    this.personModel = [];
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

  openEditForm(personModel: PersonResponseModel) {
    const modalRef = this.modalService.open(PersonEditFormComponent, {scrollable: true, backdrop: 'static'});
    modalRef.componentInstance.personModel = personModel;
    modalRef.result.then(() => this.reload());
  }

  openEditNewForm() {
    const modalRef = this.modalService.open(PersonEditFormComponent, {scrollable: true, backdrop: 'static'});
    modalRef.result.then(() => this.reload());
  }

  deleteUser(item: PersonResponseModel) {
    this.personApiService.doDelete(item.userId).subscribe((personModel) => {
    });
    this.reload();
  }

  public displayStatus(item: PersonResponseModel): string {
    return item.status === true ? 'Aktiv' : 'Inaktiv';
  }

  private reload(): void {
    window.location.reload();
  }

  public popoverContent(item: PersonResponseModel): string {
    return `Wollen Sie die Person \"${item.firstName}\" löschen?
            <br/>
            <b><span class='text-danger text-monospace mr-1'>Achtung!</span></b>
            Dieser Schritt kann <b>nicht</b> rückgängig gemacht werden.`;
  }

}
