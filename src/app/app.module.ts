import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './modules/general/home/home.component';
import {NotFoundComponent} from './modules/general/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {PersonCreateUpdateService} from './modules/general/person-list/person-edit-form/person-create-update.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonApiService} from './modules/general/person-list/person-api.service';
import {UrlaubApiService} from './modules/general/vacation/urlaub-api.service';
import {UrlaubCreateService} from './modules/general/vacation/vacation-edit-form/urlaub-create.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [PersonCreateUpdateService, PersonApiService, UrlaubApiService, UrlaubCreateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
