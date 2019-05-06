import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerAvatarComponent } from './components/speaker-avatar/speaker-avatar.component';
import { SpeakerLinkComponent } from './components/speaker-link/speaker-link.component';

@NgModule({
  declarations: [SpeakerAvatarComponent, SpeakerLinkComponent],
  exports: [SpeakerAvatarComponent, SpeakerLinkComponent],
  imports: [CommonModule]
})
export class SharedModule {}
