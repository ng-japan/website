import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {
  getEventStartDate() {
    return DateTime.fromObject({
      year: 2018,
      month: 6,
      day: 16,
      zone: 'Asia/Tokyo'
    }).toJSDate();
  }

  getVenue() {
    return 'Google Japan';
  }

  getVenueLocation() {
    return 'Tokyo, Roppongi Hills';
  }

  getTitle() {
    return `ng-japan 2019`;
  }

  getSubtitle() {
    return `"World x Angular"`;
  }
}
