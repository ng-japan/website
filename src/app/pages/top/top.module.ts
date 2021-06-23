import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { HeroBackgroundComponent } from './components/hero-background/hero-background.component';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule } from '../../shared/shared.module';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { TopSpeakersComponent } from './components/top-speakers/top-speakers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [
    TopComponent,
    HeroBackgroundComponent,
    HeroComponent,
    IntroductionComponent,
    HighlightsComponent,
    TopSpeakersComponent,
    SponsorsComponent,
    VideosComponent,
  ],
  imports: [CommonModule, TopRoutingModule, SharedModule, MatCardModule],
})
export class TopModule {}
