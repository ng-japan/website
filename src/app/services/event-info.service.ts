import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class EventInfoService {
  getEventStartDate() {
    return DateTime.fromObject({
      year: 2020,
      month: 10,
      day: 17,
      zone: 'Asia/Tokyo',
    });
  }

  getVenue() {
    return 'YouTube Live';
  }

  getVenueLocation() {
    return '';
  }

  getTitle() {
    return `mini ng-japan 2020`;
  }

  getSubtitle() {
    return ``;
  }

  isCallingForAttendees(date: DateTime) {
    return (
      this.getEventStartDate()
        .minus({
          day: 3,
        })
        .diff(date, 'minutes').minutes > 0
    );
  }

  isCallingForSpeakers(date: DateTime) {
    return (
      DateTime.fromObject({
        year: 2019,
        month: 3,
        day: 16,
        zone: 'Asia/Tokyo',
      }).diff(date, 'minutes').minutes > 0
    );
  }

  isCallingForSponsors(date: DateTime) {
    return (
      DateTime.fromObject({
        year: 2019,
        month: 6,
        day: 17,
        zone: 'Asia/Tokyo',
      }).diff(date, 'minutes').minutes > 0
    );
  }
}
