import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, ScheduleRoutingModule, MatProgressSpinnerModule]
})
export class ScheduleModule {}
