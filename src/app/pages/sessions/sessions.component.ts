import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SessionService } from '../../services/sessions.service';
import { Session } from '../../core/models';

@Component({
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionsComponent implements OnInit {
  sessions$ = this.sessionService.sessions$;
  sessionsLoading$ = this.sessionService.sessionsLoading$;

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.fetchSessions();
  }

  isEnglishSession(session) {
    return (
      session.categories.find(
        cat =>
          cat.name === 'Language' &&
          cat.categoryItems.find(item => item.name === 'English'),
      ) != null
    );
  }

  getSpeakerName(session: Session): string {
    return session.speakers.map(s => s.name).join(', ');
  }
}
