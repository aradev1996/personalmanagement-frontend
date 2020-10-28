import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SigninComponent} from './signin.component';
import {SigninRoutingModule} from './signin-routing.module';
import {VacationEditFormComponent} from './vacation-edit-form/vacation-edit-form.component';
import {VactionUserSelectFormComponent} from './vaction-user-select-form/vaction-user-select-form.component';
import {PersonApiService} from '../person-list/person-api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UrlaubApiService} from './urlaub-api.service';
import {UrlaubCreateService} from './vacation-edit-form/urlaub-create.service';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    SigninComponent
  ],
  declarations: [
    SigninComponent,
    VacationEditFormComponent,
    VactionUserSelectFormComponent
  ],
  providers: [
    PersonApiService, UrlaubApiService, UrlaubCreateService
  ],
})
export class SigninModule { }
