import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeUtil {
  private static feFormat: string = 'YYYY MM DD';

  private static beFormat: string = 'YYYY-MM-DD';

  private static dateBeSeparatorRegex = /[-]/;

  private static dateFeSeparatorRegex = /[ ]/;

  private static dateBePatternRegex = /(\d{4}[-])(\d{2}[-])(\d{2})/;

  private static dateFePatternRegex = /(\d{4}[ ])(\d{2}[ ])(\d{2})/;

  public static stringToDate(dateStr: string) {
    const ngbDateStruct = DateTimeUtil.stringToNgbDateStruct(dateStr);
    return DateTimeUtil.ngbDateStructToDate(ngbDateStruct);
  }

  public static stringToMoment(date: string): Moment {
    return date ? moment(date) : null;
  }

  public static stringToNgbDateStruct(dateStr: string): NgbDateStruct {
    if (dateStr === null || dateStr === undefined || !DateTimeUtil.isValidDate(dateStr)) return null;

    if (this.evaluateIfIsBeFormat(dateStr)) {
      return this.createNgbDateStruct(dateStr, this.dateBePatternRegex, this.dateBeSeparatorRegex);
    } else {
      return this.createNgbDateStruct(dateStr, this.dateFePatternRegex, this.dateFeSeparatorRegex);
    }
  }

  public static dateToNgbDateStruct(date: Date): NgbDateStruct {
    return date ? { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() } : null;
  }

  public static ngbDateStructToDate(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }

  public static ngbDateStructToString(date: NgbDateStruct, isBeFormat: boolean = false): string {
    return date ? moment(DateTimeUtil.ngbDateStructToDate(date)).format(this.getFormat(isBeFormat)) : null;
  }

  public static ngbDateStructToMoment(date: NgbDateStruct): Moment {
    return date ? moment(DateTimeUtil.ngbDateStructToDate(date)) : null;
  }

  public static displayStringDate(dateStr: string, isBeFormat: boolean = false): string {
    const ngbDateStruct: NgbDateStruct = DateTimeUtil.stringToNgbDateStruct(dateStr);
    return dateStr != null ? DateTimeUtil.ngbDateStructToString(ngbDateStruct, isBeFormat) : '';
  }

  public static getCurrentDateAsMoment() {
    return moment(new Date());
  }

  public static getCurrentYearAsString() {
    return moment(new Date())
      .year()
      .toString();
  }

  public static getCurrentMonthAsString() {
    return moment(new Date()).format('MM');
  }

  public static getCurrentDateAsNgbDateStruct() {
    return DateTimeUtil.dateToNgbDateStruct(new Date());
  }

  public static isValidDate(date: any): boolean {
    if (typeof date === 'string') {
      let validDate: boolean = false;
      if (this.evaluateIfIsBeFormat(date)) {
        validDate = date.match(this.dateBePatternRegex) === null ? false : true;
      } else {
        validDate = date.match(this.dateFePatternRegex) === null ? false : true;
      }

      // 'Invalid date' can be returned by this class ngbDateStructToString function
      return date === 'Invalid date' ? false : validDate;
    } else if (moment.isDate(date)) {
      return true;
    } else {
      return moment.isDate(DateTimeUtil.ngbDateStructToDate(date));
    }
  }

  public static getDateFirstOfNextMonthOrToMiddleOfMonth(): NgbDateStruct {
    const currentDate: NgbDateStruct = DateTimeUtil.dateToNgbDateStruct(new Date());

    const firstOfNextMonthOrMiddleOfMonth: NgbDateStruct = currentDate;

    if (currentDate.day > 1 && currentDate.day <= 15) {
      firstOfNextMonthOrMiddleOfMonth.day = 15;
    } else {
      firstOfNextMonthOrMiddleOfMonth.day = 1;
    }

    if (currentDate.month === 12) {
      firstOfNextMonthOrMiddleOfMonth.month = 1;
      firstOfNextMonthOrMiddleOfMonth.year = currentDate.year + 1;
    } else {
      firstOfNextMonthOrMiddleOfMonth.month = currentDate.month + 1;
    }

    return firstOfNextMonthOrMiddleOfMonth;
  }

  private static getFormat(isBeFormat: boolean = false): string {
    if (isBeFormat) {
      return this.beFormat;
    } else {
      return this.feFormat;
    }
  }

  private static evaluateIfIsBeFormat(dateStr: string): any {
    return dateStr.match(this.dateBePatternRegex) === null ? false : true;
  }

  private static createNgbDateStruct(dateStr: string, dateBePatternRegex: any, dateSeparatorRegex: any) {
    const dateArray = dateBePatternRegex.exec(dateStr);
    const year = +dateArray[1].replace(dateSeparatorRegex, '');
    const month = +dateArray[2].replace(dateSeparatorRegex, '');
    const day = +dateArray[3].replace(dateSeparatorRegex, '');

    return { day: day, month: month, year: year };
  }
}
