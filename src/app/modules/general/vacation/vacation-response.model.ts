import {PersonResponseModel} from '../person-list/person-response.model';

export class VacationResponseModel {
  startDate: string;
  endDate: string;
  personResponse: PersonResponseModel;
  birthDate: string;
  status: boolean;

  static fromJson(json: any): VacationResponseModel {
    const vacationResponseModel = new VacationResponseModel();

    vacationResponseModel.startDate = json.startDate;
    vacationResponseModel.endDate = json.endDate;
    vacationResponseModel.personResponse = PersonResponseModel.fromJson(json.personResponse);

    return vacationResponseModel;
  }
}
