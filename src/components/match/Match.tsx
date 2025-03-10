import { useState } from "react";
import { MatchInterface } from "../../types/types";

interface MatchProps {
  match: MatchInterface;
}

export const Match = ({ match }: MatchProps) => {
  const {
    id,
    title,
    homeTeam: { players },
  } = match;
  const [isOpened, setIsOpened] = useState(false);

  const getToggledContent = () => {
    return isOpened ? (
      <div className="player_info_wrapper">
        {players.map((player) => (
          <div key={player.id} className="player_info">
            <p>{player.username}</p>
          </div>
        ))}
      </div>
    ) : (
      <div>
        <p>{title}</p>
      </div>
    );
  };

  // Возвращать какой-то базис, но в случае, если isOpened, то добавлять один контент, а если нет, то другой

  return (
    <div key={id} className="card">
      <h2>{title}</h2>
      {getToggledContent()}
      <button onClick={() => setIsOpened(!isOpened)}> click to toggle </button>
    </div>
  );
};
