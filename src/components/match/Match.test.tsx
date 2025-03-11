import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Match } from "./Match";
import { MatchStatus } from "../../types/types";

const mockMatch = {
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
};

describe("Match", () => {
  it("renders match component with correct data", () => {
    render(<Match match={mockMatch} />);

    expect(screen.getByText("Home Team")).toBeInTheDocument();
    expect(screen.getByText("Away Team")).toBeInTheDocument();
    expect(screen.getByText("2 : 1")).toBeInTheDocument();
  });

  it("renders player information correctly", () => {
    render(<Match match={mockMatch} />);

    expect(screen.getByText("Player1")).toBeInTheDocument();
    expect(screen.getByText("Player4")).toBeInTheDocument();
  });

  it("renders match status correctly", () => {
    render(<Match match={mockMatch} />);

    expect(screen.getByAltText("status_live")).toBeInTheDocument();
  });
});
