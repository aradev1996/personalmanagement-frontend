import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutComponent} from './about.component';
import {AboutRoutingModule} from './about-routing.module';
import {PersonEditFormComponent} from './person-edit-form/person-edit-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {PersonApiService} from './person-api.service';
import {PersonCreateUpdateService} from './person-edit-form/person-create-update.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    AboutComponent
  ],
  entryComponents: [PersonEditFormComponent],
  declarations: [
    AboutComponent,
    PersonEditFormComponent
  ],
  providers: [PersonApiService, PersonCreateUpdateService],
})
export class AboutModule {
}
