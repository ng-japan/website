import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerAvatarComponent } from './components/speaker-avatar/speaker-avatar.component';

@NgModule({
  declarations: [SpeakerAvatarComponent],
  exports: [SpeakerAvatarComponent],
  imports: [CommonModule]
})
export class SharedModule {}
