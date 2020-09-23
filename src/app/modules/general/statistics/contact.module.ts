import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {PersonStatisticsApiService} from './person-statistics-api.service';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
    PersonStatisticsApiService
  ],
})
export class ContactModule {
}
