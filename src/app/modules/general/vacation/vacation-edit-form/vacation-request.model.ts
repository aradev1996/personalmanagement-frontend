export class VacationRequestModel {
  startDate: string;
  endDate: string;
  personId: string;

  static fromJson(json: any): VacationRequestModel {
    const vacationResponseModel = new VacationRequestModel();

    vacationResponseModel.startDate = json.startDate;
    vacationResponseModel.endDate = json.endDate;
    vacationResponseModel.personId = json.personId;

    return vacationResponseModel;
  }
}
