import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateTime } from 'luxon';
import { EventInfoService } from '../../../../services/event-info.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  constructor(private eventInfo: EventInfoService) {}

  eventTitle = this.eventInfo.getTitle();
  eventSubtitle = this.eventInfo.getSubtitle();
  eventStartDate = this.eventInfo.getEventStartDate().toJSDate();
  eventVenue = this.eventInfo.getVenue();
  eventVenueLocation = this.eventInfo.getVenueLocation();

  showCallForAttendeesLink = this.eventInfo.isCallingForAttendees(
    DateTime.local()
  );

  showCallForSpeakersLink = this.eventInfo.isCallingForSpeakers(
    DateTime.local()
  );
  showCallForSponsorsLink = this.eventInfo.isCallingForSponsors(
    DateTime.local()
  );
}
