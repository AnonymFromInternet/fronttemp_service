import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Matches } from "./Matches";
import { MatchStatus } from "../../types/types";

const mockMatches = [
  {
    id: "1",
    homeTeam: {
      players: [
        { id: "1", username: "Player1", kills: 5 },
        { id: "2", username: "Player2", kills: 3 },
        { id: "3", username: "Player3", kills: 2 },
      ],
      name: "Home Team",
      place: 1,
      points: 10,
      total_kills: 10,
    },
    awayTeam: {
      players: [
        { id: "4", username: "Player4", kills: 4 },
        { id: "5", username: "Player5", kills: 1 },
        { id: "6", username: "Player6", kills: 0 },
      ],
      name: "Away Team",
      place: 2,
      points: 8,
      total_kills: 5,
    },
    homeScore: 2,
    awayScore: 1,
    status: MatchStatus.Live,
    time: "2023-10-01T12:00:00Z",
    title: "Match Title",
  },
];

describe("Matches", () => {
  it("renders loading indicator when isLoading is true", () => {
    render(<Matches matches={[]} isLoading={true} />);

    expect(screen.getByText("Загрузка...")).toBeInTheDocument();
  });

  it("renders empty list message when there are no matches", () => {
    render(<Matches matches={[]} isLoading={false} />);

    expect(screen.getByText("Список матчей пока что пуст")).toBeInTheDocument();
  });

  it("renders matches when there are matches", () => {
    render(<Matches matches={mockMatches} isLoading={false} />);

    expect(screen.getByText("Home Team")).toBeInTheDocument();
    expect(screen.getByText("Away Team")).toBeInTheDocument();
  });
});
