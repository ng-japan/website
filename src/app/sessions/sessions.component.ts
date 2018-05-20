import { Component, OnInit } from '@angular/core';

declare function require(x: string): any;
const Speakers = require('../../data/sessions.json');
const Sessions = require('../../data/sessions.json')[0].sessions;

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessionMap = Sessions.reduce((obj, value) => ({ ...obj, [value.id]: value }), {});
  speakerMap = Speakers.reduce((obj, value) => ({ ...obj, [value.id]: value }), {});

  constructor() { }

  ngOnInit() {
  }

}
