import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from '../../core/models';
import { SpeakerService } from '../../services/speaker.service';

@Component({
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  featuredSpeakers$: Observable<Speaker[]>;
  sessionSpeakers$: Observable<Speaker[]>;

  constructor(private speakerService: SpeakerService) {
    this.featuredSpeakers$ = speakerService.featuredSpeakers$;
    this.sessionSpeakers$ = speakerService.sessionSpeakers$;
  }

  ngOnInit() {
    this.speakerService.initialize();
  }
}
