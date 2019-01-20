import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare function require(x: string): any;
const Speakers = require('../../../data/speakers.json');
const Sessions = require('../../../data/sessions.json')[0].sessions;

@Component({
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  guests = Speakers.filter(s => s.isTopSpeaker);
  speakers = Speakers.filter(s => !s.isTopSpeaker);
  sessionMap = Sessions.reduce(
    (obj, value) => ({ ...obj, [value.id]: value }),
    {}
  );
  speakerMap = Speakers.reduce(
    (obj, value) => ({ ...obj, [value.id]: value }),
    {}
  );
}
