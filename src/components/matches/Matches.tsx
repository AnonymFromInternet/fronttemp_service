import { memo } from "react";
import { MatchInterface } from "../../types/types";
import { Match } from "../match/Match";

import styles from "./Matches.module.css";

interface MatchesProps {
  matches: MatchInterface[];
  isLoading: boolean;
}

const MatchesComponent = ({ matches, isLoading }: MatchesProps) => {
  return (
    <div className={styles["matches_wrapper"]}>
      <div className={styles["matches_container"]}>
        {isLoading && (
          <div className={styles["loading_indicator"]}>
            <p>Загрузка...</p>
            {/* добавить спиннер или другую анимацию загрузки */}
          </div>
        )}

        {matches.length === 0 && !isLoading && (
          <div className={styles["empty_list"]}>
            <p>Список матчей пока что пуст</p>
          </div>
        )}

        {!isLoading &&
          matches.length != 0 &&
          matches.map((match) => <Match key={match.id} match={match} />)}
      </div>
    </div>
  );
};

export const Matches = memo(MatchesComponent);
