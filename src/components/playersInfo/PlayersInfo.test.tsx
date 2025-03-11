import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PlayersInfo } from "./PlayersInfo";

const mockPlayers = [
  { id: "1", username: "Player1", kills: 5 },
  { id: "2", username: "Player2", kills: 3 },
  { id: "3", username: "Player3", kills: 2 },
];

const mockAwayPlayers = [
  { id: "4", username: "Player4", kills: 4 },
  { id: "5", username: "Player5", kills: 1 },
  { id: "6", username: "Player6", kills: 0 },
];

describe("PlayersInfo", () => {
  it("renders players information correctly", () => {
    render(
      <PlayersInfo
        players={mockPlayers}
        leftTeamPlace={1}
        leftTeamPoints={10}
        leftTeamTotalKills={10}
        awayPlayers={mockAwayPlayers}
        rightTeamPlace={2}
        rightTeamPoints={8}
        rightTeamTotalKills={5}
      />,
    );

    expect(screen.getByText("Player1")).toBeInTheDocument();
    expect(screen.getByText("Player4")).toBeInTheDocument();
    expect(screen.getByText("Points:")).toBeInTheDocument();
    expect(screen.getByText("Место:")).toBeInTheDocument();
    expect(screen.getByText("Всего убийств:")).toBeInTheDocument();
  });

  it("renders team statistics correctly", () => {
    render(
      <PlayersInfo
        players={mockPlayers}
        leftTeamPlace={1}
        leftTeamPoints={10}
        leftTeamTotalKills={10}
        awayPlayers={mockAwayPlayers}
        rightTeamPlace={2}
        rightTeamPoints={8}
        rightTeamTotalKills={5}
      />,
    );

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
