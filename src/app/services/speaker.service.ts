import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@lacolaco/reactive-store';
import { Speaker } from '../core/models';

export interface State {
  featuredSpeakers: Speaker[];
  sessionSpeakers: Speaker[];
}

export const initialValue: State = {
  featuredSpeakers: [],
  sessionSpeakers: [],
};

@Injectable({ providedIn: 'root' })
export class SpeakerService {
  private store = new Store<State>({
    initialValue,
  });

  get featuredSpeakers$() {
    return this.store.select((state) => state.featuredSpeakers);
  }
  get sessionSpeakers$() {
    return this.store.select((state) =>
      state.sessionSpeakers.filter((speaker) => !speaker.isTopSpeaker)
    );
  }

  constructor(private httpClient: HttpClient) {}

  async initialize() {}
}
