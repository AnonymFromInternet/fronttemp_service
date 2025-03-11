import { Player } from "../../types/types";

import styles from "./PlayersInfo.module.css";
import fonts from "../../assets/fonts/fonts.module.css";

import playerAvatar from "../../assets/images/player_avatar.svg";

interface PlayersInfoProps {
  players: Player[];
  leftTeamPlace: number;
  leftTeamPoints: number;
  leftTeamTotalKills: number;

  awayPlayers: Player[];
  rightTeamPlace: number;
  rightTeamPoints: number;
  rightTeamTotalKills: number;
}

export const PlayersInfo = ({
  players,
  awayPlayers,
  leftTeamPoints,
  leftTeamPlace,
  leftTeamTotalKills,
  rightTeamPlace,
  rightTeamPoints,
  rightTeamTotalKills,
}: PlayersInfoProps) => {
  return (
    <div className={`${styles["players_info_wrapper"]} ${fonts["inter-text"]}`}>
      <div className={styles["players_wrapper"]}>
        <div className={styles["command_info_wrapper"]}>
          <div className={styles["players"]}>{players.map(getPlayerInfo)}</div>
          <div
            className={`${styles["command_statistic"]} ${fonts["inter-text"]}`}
          >
            <div className={styles["points"]}>
              Points:
              <p className={styles["value"]}>{leftTeamPoints}</p>
            </div>
            <div className={styles["place"]}>
              Место:
              <p className={styles["value"]}>{leftTeamPlace}</p>
            </div>
            <div className={styles["total_kills"]}>
              Всего убийств:
              <p className={styles["value"]}>{leftTeamTotalKills}</p>
            </div>
          </div>
        </div>

        <div className={styles["command_info_wrapper"]}>
          <div className={styles["away_players"]}>
            {awayPlayers.map(getPlayerInfo)}
          </div>
          <div
            className={`${styles["command_statistic"]} ${fonts["inter-text"]}`}
          >
            <div className={styles["points"]}>
              Points:
              <p className={styles["value"]}>{rightTeamPoints}</p>
            </div>
            <div className={styles["place"]}>
              Место:
              <p className={styles["value"]}>{rightTeamPlace}</p>
            </div>
            <div className={styles["total_kills"]}>
              Всего убийств:
              <p className={styles["value"]}>{rightTeamTotalKills}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getPlayerInfo = (player: Player) => {
  return (
    <div key={player.id} className={styles["player_info"]}>
      <img
        src={playerAvatar}
        alt={player.username}
        className={styles["player_avatar"]}
      />
      <p style={{ fontSize: "medium" }} className={styles["player_username"]}>
        {player.username}
      </p>

      <p
        className={styles["killed_statistic"]}
        style={{
          fontSize: "14px",
          color: "#FAFAFA66",
          opacity: 0.4,
          margin: "0 0 0 15px",
        }}
      >
        Убийств:
      </p>

      <p
        className={styles["killed_statistic"]}
        style={{ fontSize: "14px", margin: "0 0 0 8px" }}
      >
        {player.kills}
      </p>
    </div>
  );
};
