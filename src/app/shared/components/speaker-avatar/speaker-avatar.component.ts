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
}
