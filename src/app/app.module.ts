import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SessionsComponent } from './sessions/sessions.component';

import { TimetableComponent } from './timetable/timetable.component';
import { TimetableCardComponent } from './timetable-card/timetable-card.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    TimetableComponent,
    TimetableCardComponent,
    SpeakersComponent,
    SessionsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
