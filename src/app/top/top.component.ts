import { Component, LOCALE_ID, Inject } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

declare function require(x: string): any;
const Speakers = require('../../data/speakers.json');
const Sessions = require('../../data/sessions.json')[0].sessions;

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
  guests = Speakers.filter(s => s.isTopSpeaker);
  speakers = Speakers.filter(s => !s.isTopSpeaker);
  sessionMap = Sessions.reduce((obj, value) => ({ ...obj, [value.id]: value }), {});
  speakerMap = Speakers.reduce((obj, value) => ({ ...obj, [value.id]: value }), {});

  isTop = true
  eventHandler: any

  constructor(@Inject(LOCALE_ID) public locale: string, router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.eventHandler = document.addEventListener('scroll', () => {
      this.isTop =
        (document.documentElement.scrollTop || document.body.scrollTop) < 50
    })
  }

  ngOnDestroy() {
    document.removeEventListener('scroll', this.eventHandler)
  }

  scroll () {
    let current = window.document.documentElement.scrollTop;
    const about = (window.document.querySelector('#about') as HTMLElement).offsetTop - 100;
    const diff = about - current;
    const frameDiff = diff / 60 * 6;
    const frame = () => {
      window.requestAnimationFrame(() => {
        if (current > about) {
          return;
        }
        current = current + frameDiff;
        window.document.documentElement.scrollTop = window.document.body.scrollTop = current;
        frame();
      })
    };
    frame();
  }
}
