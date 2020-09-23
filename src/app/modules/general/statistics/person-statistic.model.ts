export class PersonStatisticModel {
  allPersonCount: number;
  activePerson: number;
  inActivePerson: number;

  static fromJson(json: any): PersonStatisticModel {
    const personStatisticModel = new PersonStatisticModel();

    personStatisticModel.allPersonCount = json.allPersonCount;
    personStatisticModel.activePerson = json.activePerson;
    personStatisticModel.inActivePerson = json.inActivePerson;


    return personStatisticModel;
  }
}
