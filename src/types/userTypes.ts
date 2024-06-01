export interface User {
  uid: string;
  name: string;
  bananas: number;
  stars: number;
  subscribed: boolean;
  lastDayPlayed: string;
  longestStreak: number;
  rank?: number;
}
