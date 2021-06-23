import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorsComponent {
  imgHeight = {
    gold: 72,
    silver: 40,
  };
}
