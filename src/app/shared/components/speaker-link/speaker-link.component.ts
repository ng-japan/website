import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Speaker } from '../../../core/models';

@Component({
  selector: 'app-speaker-link',
  templateUrl: './speaker-link.component.html',
  styleUrls: ['./speaker-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakerLinkComponent {
  @Input() speaker: Speaker;
  @Input() isFeatured = false;

  get speakerLink(): string | null {
    if (this.speaker.links.length === 0) {
      return null;
    }
    const twitter = this.speaker.links.find(
      (link) => link.linkType === 'Twitter'
    );
    if (twitter) {
      return twitter.url;
    }
    return this.speaker.links[0].linkType;
  }
}
