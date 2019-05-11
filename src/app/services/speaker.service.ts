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
  sessionSpeakers: []
};

@Injectable({ providedIn: 'root' })
export class SpeakerService {
  private store = new Store<State>({
    initialValue
  });

  get featuredSpeakers$() {
    return this.store.select(state => state.featuredSpeakers);
  }
  get sessionSpeakers$() {
    return this.store.select(state => state.sessionSpeakers);
  }

  constructor(private httpClient: HttpClient) {}

  async initialize() {
    await Promise.all([
      this.initializeFeaturedSpeakers(),
      this.initializeSessionSpeakers()
    ]);
  }

  private async initializeFeaturedSpeakers() {
    const featuredSpeakers: Speaker[] = [
      // Miles Malerba
      {
        id: 'F01',
        fullName: 'Miles Malerba',
        tagLine: 'Angular Components Team',
        profilePicture: 'https://angular.io/generated/images/bios/mmalerba.jpg',
        sessions: [],
        links: [
          {
            linkType: 'Twitter',
            url: 'https://twitter.com/milesmalerba',
            title: 'Twitter'
          }
        ],
        // tslint:disable-next-line: max-line-length
        bio: `Miles is a software engineer on the Angular Components team at Google. In addition to Javascripting he enjoys eating food and ogling cute puppies.`
      },
      // Rado Kirov
      {
        id: 'F02',
        fullName: 'Rado Kirov',
        tagLine: 'Angular Core Team',
        profilePicture: 'https://angular.io/generated/images/bios/rado.jpg',
        sessions: [],
        links: [
          {
            linkType: 'Twitter',
            url: 'https://twitter.com/radokirov',
            title: 'Twitter'
          }
        ],
        // tslint:disable-next-line: max-line-length
        bio: `Rado has been on the Angular Core team since Summer 2014. Before Angular, he worked on the Adsense serving stack, responsible for serving billions of ads daily. Being passionate about open source, he made contributions to Angular as a Google-20% project, before making the fulltime jump. He is a recovering academic; ask him about error-correcting codes from algebraic curves (or don't).`
      }
    ];
    this.store.update(state => ({
      ...state,
      featuredSpeakers
    }));
  }

  private async initializeSessionSpeakers() {
    const speakers = await this.httpClient
      .get<Speaker[]>('https://sessionize.com/api/v2/72q4wa3q/view/speakers')
      .toPromise();
    this.store.update(state => ({
      ...state,
      sessionSpeakers: speakers
    }));
  }
}
