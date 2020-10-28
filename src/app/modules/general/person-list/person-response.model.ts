export class PersonResponseModel {
  userId: string;
  firstName: string;
  lastName: string;
  adress: string;
  birthDate: string;
  recordingDate: string;
  leavingDate: string;
  salary: string;
  status: boolean;
  holidayDays: string;

  static fromJson(json: any): PersonResponseModel {
    const personResponseModel = new PersonResponseModel();

    personResponseModel.userId = json.userId;
    personResponseModel.firstName = json.firstName;
    personResponseModel.lastName = json.lastName;
    personResponseModel.adress = json.adress;
    personResponseModel.birthDate = json.birthDate;
    personResponseModel.recordingDate = json.recordingDate;
    personResponseModel.leavingDate = json.leavingDate;
    personResponseModel.salary = json.salary;
    personResponseModel.status = json.status;
    personResponseModel.holidayDays = json.holidayDays;

    return personResponseModel;
  }
}
