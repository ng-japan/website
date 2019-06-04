import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent {
  loaded = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  onLoad() {
    this.loaded = true;
    this.cdRef.markForCheck();
  }
}
