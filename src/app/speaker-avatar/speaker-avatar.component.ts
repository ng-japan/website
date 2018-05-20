import { Component, OnInit, Input } from '@angular/core';
import { Speaker } from '../../types';

@Component({
  selector: 'app-speaker-avatar',
  templateUrl: './speaker-avatar.component.html',
  styleUrls: ['./speaker-avatar.component.css']
})
export class SpeakerAvatarComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor() { }

  ngOnInit() {
  }

}
