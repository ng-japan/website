import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sessions',
    loadChildren: () =>
      import('./pages/sessions/sessions.module').then(m => m.SessionsModule)
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./pages/schedule/schedule.module').then(m => m.ScheduleModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
