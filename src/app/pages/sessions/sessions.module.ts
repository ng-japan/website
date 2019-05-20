import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SessionsComponent } from './sessions.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SessionsComponent],
  imports: [SharedModule, SessionsRoutingModule, MatProgressSpinnerModule]
})
export class SessionsModule {}
