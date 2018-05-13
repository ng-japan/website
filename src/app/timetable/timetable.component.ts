import { Component, OnInit, Input } from '@angular/core';
import { Session, Speaker } from '../../types';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  @Input() sessions: Session[];
  @Input() speakers: Speaker[];

  KEYNOTE = 36331
  PWA = 39173
  ZONE = 38673
  DAIKIBO = 38662
  HAMARI = 40791
  FIREBASE = 39047
  NEW_SERVICE = 38780
  SCREENSHOT_TEST = 40224
  PROTRACTOR = 39498
  PLANT_UML = 40122
  CSS = 40383
  CDK = 36329
  NGLVY = 36330
  PANEL = 36332

  constructor() {}

  ngOnInit() {
  }

}
