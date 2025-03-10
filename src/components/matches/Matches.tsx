import { MatchInterface } from "../../types/types";
import { Match } from "../match/Match";

interface MatchesProps {
  matches: MatchInterface[];
  isLoading: boolean;
}

export const Matches = ({ matches, isLoading }: MatchesProps) => {
  if (isLoading) {
    return (
      <div className="matches_wrapper">
        <div className="loading_indicator">
          <p>Загрузка...</p>
          {/* добавить спиннер или другую анимацию загрузки */}
        </div>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="matches_wrapper">
        <div className="empty_list">
          <p>Список матчей пока что пуст</p>
        </div>
      </div>
    );
  }

  return (
    <div className="matches_wrapper">
      {matches.map((match) => (
        <Match key={match.id} match={match} />
      ))}
    </div>
  );
};
