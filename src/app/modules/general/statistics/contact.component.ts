import {Component, OnInit} from '@angular/core';
import {PersonStatisticsApiService} from './person-statistics-api.service';
import {PersonStatisticModel} from './person-statistic.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: PersonStatisticModel;

  constructor(private personStatisticApi: PersonStatisticsApiService) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.personStatisticApi.doGetAll().subscribe((personModel: any) => {
      this.model = personModel;
    });
  }

}
