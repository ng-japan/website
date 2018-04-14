import { Component } from '@angular/core';

declare function require(x: string): any;
const Speakers = require('../data/speakers.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guests = Speakers.filter(s => s.tagLine.includes('Angular'));
  speakers = Speakers.filter(s => !s.tagLine.includes('Angular'));
  scroll () {
    let current = window.document.documentElement.scrollTop;
    const about = (window.document.querySelector('#about') as HTMLElement).offsetTop;
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
