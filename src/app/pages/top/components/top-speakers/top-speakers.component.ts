import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Speaker } from '../../../../core/models';

@Component({
  selector: 'app-top-speakers',
  templateUrl: './top-speakers.component.html',
  styleUrls: ['./top-speakers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopSpeakersComponent {
  @Input()
  featuredSpeakers: Speaker[];

  @Input()
  sessionSpeakers: Speaker[];
}
