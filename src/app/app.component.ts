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
}
