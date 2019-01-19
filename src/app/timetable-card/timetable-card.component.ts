import { Component, OnInit, Input } from '@angular/core';
import { Session, Speaker } from '../../types';

@Component({
  selector: 'app-timetable-card',
  templateUrl: './timetable-card.component.html',
  styleUrls: ['./timetable-card.component.css']
})
export class TimetableCardComponent implements OnInit {
  @Input() speakers: Speaker[];
  @Input() session: Session;

  constructor() {}

  get id() {
    return this.session ? this.session.id : '';
  }

  get title() {
    return this.session ? this.session.title : '';
  }

  get speaker() {
    return this.speakers
      ? this.session.speakers.map(s => s.name).join(', ')
      : '';
  }

  get imageUrls() {
    return this.session && this.speakers
      ? this.session.speakers.map(s => this.speakers[s.id].profilePicture)
      : [];
  }

  ngOnInit() {}
}
