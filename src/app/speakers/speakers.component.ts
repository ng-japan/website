import { NavigationEnd, Router } from '@angular/router';
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
  speakers: Speaker[] = Speakers.sort((a, b) =>
    a.isTopSpeaker === b.isTopSpeaker ? 0 : a.isTopSpeaker ? -1 : 1
  ).map(s => {
    const twitter = s.links.find(l => l.linkType === 'Twitter');
    if (!twitter) {
      return s;
    }
    return {
      ...s,
      twitterId: twitter.url.replace('https://twitter.com/', '')
    };
  });

  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          window.requestAnimationFrame(() => {
            const element: any = document.querySelector('#' + tree.fragment);
            if (element) {
              const { top } = element.getBoundingClientRect();
              window.requestAnimationFrame(() => {
                document.documentElement.scrollTop = document.body.scrollTop =
                  top - 130;
              });
            }
          });
        }
      }
    });
  }

  ngOnInit() {}
}
