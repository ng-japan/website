import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'sessions',
        component: SessionsComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class SessionsRoutingModule {}
