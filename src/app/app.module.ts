import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';

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
import { TwitterFollowComponent } from './elements/twitter-follow/twitter-follow.component';
import { TitleLogoComponent } from './elements/title-logo/title-logo.component';
import { HeaderMenuComponent } from './elements/header-menu/header-menu.component';
import { LayoutModule } from '@angular/cdk/layout';

const componentsForElement: { type: Type<any>; selector: string }[] = [
  {
    type: TwitterFollowComponent,
    selector: 'twitter-follow'
  },
  {
    type: TitleLogoComponent,
    selector: 'title-logo'
  },
  {
    type: HeaderMenuComponent,
    selector: 'header-menu'
  }
];

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
    HeaderMenuComponent
  ],
  entryComponents: [...componentsForElement.map(item => item.type)],
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
export class AppModule {
  constructor(injector: Injector) {
    componentsForElement.forEach(cmp => {
      const elType = createCustomElement(cmp.type, { injector });
      window.customElements.define(cmp.selector, elType);
    });
  }
}
