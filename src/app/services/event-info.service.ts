import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {
  getEventStartDate() {
    return DateTime.fromObject({
      year: 2019,
      month: 7,
      day: 13,
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
