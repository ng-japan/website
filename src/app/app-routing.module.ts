import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakersComponent } from './speakers/speakers.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: '', loadChildren: './pages/top/top.module#TopModule' },
  { path: 'speakers', component: SpeakersComponent }
  // { path: 'sessions', component: SessionsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
