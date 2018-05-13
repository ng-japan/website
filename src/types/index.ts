export type Session = {
  id: number,
  title: string,
  description: string,
  speakers: { id: string, name: string }[],
};

export type Speaker = {
  id: string,
  fullName: string,
  bio: string,
  tagLine: string,
  profilePicture: string,
  isTopSpeaker: boolean,
};
