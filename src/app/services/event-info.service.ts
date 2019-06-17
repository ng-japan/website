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
    });
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

  isCallingForSpeakers(date: DateTime) {
    return (
      DateTime.fromObject({
        year: 2019,
        month: 3,
        day: 16,
        zone: 'Asia/Tokyo'
      }).diff(date, 'minutes').minutes > 0
    );
  }

  isCallingForSponsors(date: DateTime) {
    return (
      DateTime.fromObject({
        year: 2019,
        month: 6,
        day: 17,
        zone: 'Asia/Tokyo'
      }).diff(date, 'minutes').minutes > 0
    );
  }
}
