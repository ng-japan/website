import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Type } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SessionsComponent } from './sessions/sessions.component';

import { SubHeaderComponent } from './sub-header/sub-header.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableCardComponent } from './timetable-card/timetable-card.component';
import { SpeakerAvatarComponent } from './speaker-avatar/speaker-avatar.component';

import { environment } from '../environments/environment';
import { TwitterFollowComponent } from './components/twitter-follow/twitter-follow.component';
import { TitleLogoComponent } from './components/title-logo/title-logo.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeroBackgroundComponent } from './components/hero-background/hero-background.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SubHeaderComponent,
    TimetableComponent,
    TimetableCardComponent,
    SpeakersComponent,
    SessionsComponent,
    SpeakerAvatarComponent,
    TwitterFollowComponent,
    TitleLogoComponent,
    HeaderMenuComponent,
    HeroBackgroundComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: false,
      scope: environment.swScope
    }),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
