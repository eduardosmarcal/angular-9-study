import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateUs'
})
export class DateUsPipe implements PipeTransform {

  /**
   * Format a date to MM/DD/YYYY.
   *
   * @param {string} date Date on format YYYY-MM-DD or YYYY/MM/DD
   * @return {string} Formateted date (MM/DD/YYYY)
   */
  transform(date: string): string {
    if (!date) {
      return '';
    }

    const dateParts = date.includes('-') && date.split('-') || date.includes('/') && date.split('/') || null;

    return dateParts.length === 3 ? `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}` : date;
  }

}
