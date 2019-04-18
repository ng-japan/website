export interface SessionOfSpeaker {
  id: number;
  name: string;
}

export interface SpeakerLink {
  title: string;
  url: string;
  linkType: 'Twitter' | 'Blog';
}

export interface Speaker {
  id: string;
  fullName: string;
  tagLine: string;
  profilePicture: string;
  bio: string;
  sessions: SessionOfSpeaker[];
  links: SpeakerLink[];
}
