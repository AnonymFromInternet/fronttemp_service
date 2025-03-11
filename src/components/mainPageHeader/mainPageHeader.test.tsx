import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainPageHeader } from "./mainPageHeader";

describe("MainPageHeader", () => {
  const fetchMatchesMock = jest.fn();

  it("renders the header with title", () => {
    render(
      <MainPageHeader
        error={null}
        isLoading={false}
        fetchMatches={fetchMatchesMock}
      />,
    );
    expect(screen.getByText("Match Tracker")).toBeInTheDocument();
  });

  it("renders the error message when there is an error", () => {
    render(
      <MainPageHeader
        error="Test Error"
        isLoading={false}
        fetchMatches={fetchMatchesMock}
      />,
    );
    expect(screen.getByText("Ошибка: Test Error")).toBeInTheDocument();
  });

  it("does not render the error message when there is no error", () => {
    render(
      <MainPageHeader
        error={null}
        isLoading={false}
        fetchMatches={fetchMatchesMock}
      />,
    );
    expect(screen.queryByText("Ошибка:")).not.toBeInTheDocument();
  });

  it("calls fetchMatches when the refresh button is clicked", () => {
    render(
      <MainPageHeader
        error={null}
        isLoading={false}
        fetchMatches={fetchMatchesMock}
      />,
    );
    fireEvent.click(screen.getByText("Обновить"));
    expect(fetchMatchesMock).toHaveBeenCalledTimes(1);
  });
});
