export interface MatchInterface {
  id?: string | number;
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export interface Player {
  id?: string | number;
  username: string;
  kills: number;
}

export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}

export enum MatchStatus {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

export interface SuccessfulResponse<T> {
  ok: boolean;
  data: T;
}

export interface MatchesResponse {
  matches: MatchInterface[];
}

export type ApiMatchesResponse = SuccessfulResponse<MatchesResponse>;
