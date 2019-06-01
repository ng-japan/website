import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SessionsComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SessionsRoutingModule {}
