import { useState } from "react";
import { MatchInterface } from "../../types/types";

import commandIcon from "../../assets/images/illustrations_role.svg";
import downIcon from "../../assets/images/down.svg";

import styles from "./Match.module.css";
import fonts from "../../assets/fonts/fonts.module.css";

interface MatchProps {
  match: MatchInterface;
}

export const Match = ({ match }: MatchProps) => {
  const {
    id,
    homeTeam: { players, name },
    awayTeam: { players: awayPlayers, name: awayName },
  } = match;

  const [isOpened, toggleIsOpened] = useState(false);

  const getToggledContent = () => {
    return (
      isOpened && (
        <div className={styles["players_info_wrapper"]}>
          <div className={styles["players"]}>
            {players.map((player) => (
              <div key={player.id} className={styles["player_info"]}>
                <p>{player.username}</p>
              </div>
            ))}
          </div>

          <div className={styles["away_players"]}>
            {awayPlayers.map((player) => (
              <div key={player.id} className={styles["player_info"]}>
                <p>{player.username}</p>
              </div>
            ))}
          </div>
        </div>
      )
    );
  };

  return (
    <div key={id} className={styles["match"]}>
      <div className={styles["left_command"]}>
        <img src={commandIcon} alt="left_command_icon" width={48} height={48} />
        <h2 className={fonts["inter-text"]}>{name}</h2>
      </div>

      <div className={styles["status"]}>
        <div className={styles["result"]}></div>

        <div className={styles["isGoing"]}></div>
      </div>

      <div className={styles["right_command"]}>
        <h2 className={fonts["inter-text"]}>{awayName}</h2>
        <img src={commandIcon} alt="left_command_icon" width={48} height={48} />
        <img
          src={downIcon}
          className={`${styles["down_icon"]} ${isOpened ? styles["down_icon_rotated"] : ""}`}
          onClick={() => toggleIsOpened((prevState) => !prevState)}
        />
      </div>
      {getToggledContent()}
    </div>
  );
};
