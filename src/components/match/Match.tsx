import { MatchInterface, MatchStatus } from "../../types/types";

import commandIcon from "../../assets/images/illustrations_role.svg";
import downIcon from "../../assets/images/down.svg";

import statusLive from "../../assets/images/status_live.svg";
import statusFinished from "../../assets/images/status_finished.svg";
import statusPreparing from "../../assets/images/status_preparing.svg";

import styles from "./Match.module.css";
import fonts from "../../assets/fonts/fonts.module.css";
import { PlayersInfo } from "../playersInfo/PlayersInfo";

interface MatchProps {
  match: MatchInterface;
}

export const Match = ({ match }: MatchProps) => {
  const {
    id,
    homeTeam: { players, name, place, points },
    awayTeam: {
      players: awayPlayers,
      name: awayName,
      place: awayPlace,
      points: awayPoints,
    },
    homeScore,
    awayScore,
    status,
  } = match;

  console.log("Match component rendered :", match);

  return (
    <div key={id} className={styles["match"]}>
      {/* Скрытый чекбокс для контроля состояния */}
      <input
        type="checkbox"
        id={`toggle-${id}`}
        className={styles["toggle_checkbox"]}
      />

      <div className={styles["match_main_content"]}>
        <div className={styles["left_command"]}>
          <img
            src={commandIcon}
            alt="left_command_icon"
            width={48}
            height={48}
          />
          <h2 className={fonts["inter-text"]}>{name}</h2>
        </div>

        <div className={styles["status"]}>
          <div
            style={{ fontWeight: 600 }}
            className={fonts["inter-text"]}
          >{`${homeScore} : ${awayScore}`}</div>
          <div className={styles["match_status"]}>
            {status === MatchStatus.Live && (
              <img src={statusLive} alt="status_live" />
            )}
            {status === MatchStatus.Finished && (
              <img src={statusFinished} alt="status_finished" />
            )}
            {status === MatchStatus.Preparing && (
              <img src={statusPreparing} alt="status_preparing" />
            )}
          </div>
        </div>

        <div className={styles["right_command"]}>
          <h2 className={fonts["inter-text"]}>{awayName}</h2>
          <img
            src={commandIcon}
            alt="left_command_icon"
            width={48}
            height={48}
          />
          {/* Используем label как триггер для чекбокса */}
          <label htmlFor={`toggle-${id}`} className={styles["toggle_label"]}>
            <img src={downIcon} className={styles["down_icon"]} alt="toggle" />
          </label>
        </div>
      </div>

      <div className={styles["players_info_wrapper"]}>
        <PlayersInfo
          players={[players[0], players[1], players[2]]}
          leftTeamPlace={place}
          leftTeamPoints={points}
          leftTeamTotalKills={
            players[0].kills + players[1].kills + players[2].kills
          }
          awayPlayers={[awayPlayers[0], awayPlayers[1], awayPlayers[2]]}
          rightTeamPlace={awayPlace}
          rightTeamPoints={awayPoints}
          rightTeamTotalKills={
            awayPlayers[0].kills + awayPlayers[1].kills + awayPlayers[2].kills
          }
        />
      </div>
    </div>
  );
};
