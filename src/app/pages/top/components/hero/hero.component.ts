import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventInfoService } from '../../../../services/event-info.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  eventTitle = this.eventInfo.getTitle();
  eventSubtitle = this.eventInfo.getSubtitle();
  eventStartDate = this.eventInfo.getEventStartDate();
  eventVenue = this.eventInfo.getVenue();
  eventVenueLocation = this.eventInfo.getVenueLocation();

  constructor(private eventInfo: EventInfoService) {}
}
