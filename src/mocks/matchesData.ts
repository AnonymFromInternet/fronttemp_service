import { v4 as uuidv4 } from "uuid";
import { MatchInterface, Team, Player, MatchStatus } from "../types/types";

function createPlayer(username: string, kills: number): Player {
  return {
    id: uuidv4(),
    username,
    kills,
  };
}

function createTeam(name: string, players: Player[], place: number): Team {
  const total_kills = players.reduce((sum, player) => sum + player.kills, 0);
  return {
    name,
    players,
    points: Math.max(0, 70 - place * 10),
    place,
    total_kills,
  };
}

const naviPlayers: Player[] = [
  createPlayer("s1mple", 25),
  createPlayer("electronic", 18),
  createPlayer("Perfecto", 14),
  createPlayer("b1t", 17),
  createPlayer("Boombl4", 9),
];

const fnaticsPlayers: Player[] = [
  createPlayer("KRIMZ", 16),
  createPlayer("Brollan", 20),
  createPlayer("mezii", 15),
  createPlayer("ALEX", 12),
  createPlayer("smooya", 19),
];

const g2Players: Player[] = [
  createPlayer("NiKo", 24),
  createPlayer("huNter", 18),
  createPlayer("JaCkz", 13),
  createPlayer("AmaNEk", 11),
  createPlayer("nexa", 15),
];

const vitaPlayers: Player[] = [
  createPlayer("ZywOo", 27),
  createPlayer("shox", 16),
  createPlayer("misutaaa", 14),
  createPlayer("apEX", 12),
  createPlayer("Kyojin", 10),
];

const astralisPlayers: Player[] = [
  createPlayer("device", 22),
  createPlayer("dupreeh", 19),
  createPlayer("Magisk", 17),
  createPlayer("Xyp9x", 13),
  createPlayer("gla1ve", 11),
];

const liquidPlayers: Player[] = [
  createPlayer("EliGE", 21),
  createPlayer("NAF", 19),
  createPlayer("Stewie2K", 17),
  createPlayer("FalleN", 13),
  createPlayer("Grim", 12),
];

const navi = createTeam("Natus Vincere", naviPlayers, 1);
const fnatic = createTeam("Fnatic", fnaticsPlayers, 2);
const g2 = createTeam("G2 Esports", g2Players, 3);
const vitality = createTeam("Team Vitality", vitaPlayers, 4);
const astralis = createTeam("Astralis", astralisPlayers, 5);
const liquid = createTeam("Team Liquid", liquidPlayers, 6);

const now = new Date();
const yesterday = new Date(now);
yesterday.setDate(now.getDate() - 1);
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
const dayAfterTomorrow = new Date(now);
dayAfterTomorrow.setDate(now.getDate() + 2);

export const mockMatches: MatchInterface[] = [
  {
    id: uuidv4(),
    time: yesterday.toISOString(),
    title: "ESL Pro League Season 15 - Final",
    homeTeam: navi,
    awayTeam: vitality,
    homeScore: 16,
    awayScore: 12,
    status: MatchStatus.Finished,
  },
  {
    id: uuidv4(),
    time: yesterday.toISOString(),
    title: "ESL Pro League Season 15 - Semifinals",
    homeTeam: g2,
    awayTeam: astralis,
    homeScore: 14,
    awayScore: 16,
    status: MatchStatus.Finished,
  },
  {
    id: uuidv4(),
    time: now.toISOString(),
    title: "BLAST Premier Spring Final 2023",
    homeTeam: fnatic,
    awayTeam: liquid,
    homeScore: 12,
    awayScore: 12,
    status: MatchStatus.Ongoing,
  },
  {
    id: uuidv4(),
    time: tomorrow.toISOString(),
    title: "IEM Cologne 2023 - Group Stage",
    homeTeam: navi,
    awayTeam: g2,
    homeScore: 0,
    awayScore: 0,
    status: MatchStatus.Scheduled,
  },
  {
    id: uuidv4(),
    time: tomorrow.toISOString(),
    title: "IEM Cologne 2023 - Group Stage",
    homeTeam: astralis,
    awayTeam: fnatic,
    homeScore: 0,
    awayScore: 0,
    status: MatchStatus.Scheduled,
  },
  {
    id: uuidv4(),
    time: dayAfterTomorrow.toISOString(),
    title: "IEM Cologne 2023 - Playoffs",
    homeTeam: vitality,
    awayTeam: liquid,
    homeScore: 0,
    awayScore: 0,
    status: MatchStatus.Scheduled,
  },
];

export const mockApiResponse = {
  ok: true,
  data: {
    matches: mockMatches,
  },
};

export async function fetchMockMatches() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockApiResponse);
    }, 800);
  });
}
