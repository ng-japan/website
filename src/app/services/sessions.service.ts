import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';
import { Session } from '../core/models';

export interface State {
  sessions: Session[];
  sessionsLoading: number;
}

export const initialValue: State = {
  sessions: [],
  sessionsLoading: 0
};

@Injectable({ providedIn: 'root' })
export class SessionService {
  private store = new Store<State>({
    initialValue
  });

  get sessions$() {
    return this.store.select(state => state.sessions);
  }
  get sessionsLoading$() {
    return this.store.select(state => state.sessionsLoading > 0);
  }

  constructor(private httpClient: HttpClient) {}

  async fetchSessions() {
    if (this.store.value.sessions.length > 0) {
      return;
    }
    this.store.update(state => ({
      ...state,
      sessionsLoading: state.sessionsLoading + 1
    }));
    const [{ sessions }] = await this.httpClient
      .get<{ sessions: Session[] }[]>(
        'https://sessionize.com/api/v2/72q4wa3q/view/sessions'
      )
      .toPromise();
    this.store.update(state => ({
      ...state,
      sessions,
      sessionsLoading: state.sessionsLoading - 1
    }));
  }
}
