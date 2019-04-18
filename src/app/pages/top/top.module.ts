import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { HeroBackgroundComponent } from './components/hero-background/hero-background.component';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule } from '../../shared/shared.module';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { TopSpeakersComponent } from './components/top-speakers/top-speakers.component';

@NgModule({
  declarations: [
    TopComponent,
    HeroBackgroundComponent,
    HeroComponent,
    IntroductionComponent,
    HighlightsComponent,
    TopSpeakersComponent
  ],
  imports: [CommonModule, TopRoutingModule, SharedModule]
})
export class TopModule {}
