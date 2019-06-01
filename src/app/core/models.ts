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
  isTopSpeaker: boolean;
}

export interface SessionCategoryItem {
  id: number;
  name: string;
}

export interface SessionCategory {
  id: number;
  name: string;
  categoryItems: SessionCategoryItem[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
  speakers: Array<{ id: string; name: string }>;
  categories: SessionCategory[];
}
