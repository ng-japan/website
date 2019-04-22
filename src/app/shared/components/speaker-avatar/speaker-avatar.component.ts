import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Speaker } from '../../../core/models';

@Component({
  selector: 'app-speaker-avatar',
  templateUrl: './speaker-avatar.component.html',
  styleUrls: ['./speaker-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerAvatarComponent {
  @Input() speaker: Speaker;
  @Input() isFeatured = false;

  get speakerLink(): string | null {
    if (this.speaker.links.length === 0) {
      return null;
    }
    const twitter = this.speaker.links.find(
      link => link.linkType === 'Twitter'
    );
    if (twitter) {
      return twitter.url;
    }
    return this.speaker.links[0].linkType;
  }
}
