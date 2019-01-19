import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top/top.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'en', component: TopComponent },
  { path: 'speakers', component: SpeakersComponent }
  // { path: 'sessions', component: SessionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
