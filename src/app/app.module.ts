import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { TitleLogoComponent } from './components/title-logo/title-logo.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakerAvatarComponent } from './speaker-avatar/speaker-avatar.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { TimetableCardComponent } from './timetable-card/timetable-card.component';
import { TimetableComponent } from './timetable/timetable.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SubHeaderComponent,
    TimetableComponent,
    TimetableCardComponent,
    SpeakersComponent,
    SessionsComponent,
    SpeakerAvatarComponent,
    TitleLogoComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: false,
      scope: environment.swScope
    }),
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
