import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './hero-background.component.html',
  styleUrls: ['./hero-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroBackgroundComponent {}
