import { Component, OnInit } from '@angular/core';
import { Speaker } from '../../types';

declare function require(x: string): any;
const Speakers = require('../../data/speakers.json');

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  speakers: Speaker[] =
    Speakers
      .sort((a, b) => (a.isTopSpeaker === b.isTopSpeaker) ? 0 : a.isTopSpeaker ? -1 : 1)
      .map(s => {
        const twitter = s.links.find(l => l.linkType === 'Twitter')
        if (!twitter) {
          return s
        }
        return {
          ...s,
          twitterId: twitter.url.replace('https://twitter.com/', ''),
        }
      })

  constructor() { }

  ngOnInit() {
  }

}
