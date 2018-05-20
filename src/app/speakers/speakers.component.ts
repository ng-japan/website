import { Component, OnInit } from '@angular/core';

declare function require(x: string): any;
const Speakers = require('../../data/speakers.json');

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  guests = Speakers.filter(s => s.isTopSpeaker);
  speakers = Speakers.filter(s => !s.isTopSpeaker);

  constructor() { }

  ngOnInit() {
  }

}
