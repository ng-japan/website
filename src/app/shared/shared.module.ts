import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerAvatarComponent } from './components/speaker-avatar/speaker-avatar.component';
import { SpeakerLinkComponent } from './components/speaker-link/speaker-link.component';
import { HtmlstringPipe } from './pipes/htmlstring.pipe';

@NgModule({
  declarations: [SpeakerAvatarComponent, SpeakerLinkComponent, HtmlstringPipe],
  exports: [
    CommonModule,
    SpeakerAvatarComponent,
    SpeakerLinkComponent,
    HtmlstringPipe
  ],
  imports: [CommonModule]
})
export class SharedModule {}
