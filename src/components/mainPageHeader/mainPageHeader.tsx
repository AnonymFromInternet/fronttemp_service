import styles from "./mainPageHeader.module.css";
import fonts from "../../assets/fonts/fonts.module.css";

import errorIconUrl from "../../assets/images/error.svg";
import refreshIconUrl from "../../assets/images/refresh.svg";
import { memo } from "react";

interface MainPageHeaderProps {
  error: string | null;
  isLoading: boolean;
  fetchMatches: () => void;
}

const MainPageHeaderComponent = ({
  error,
  isLoading,
  fetchMatches,
}: MainPageHeaderProps) => {
  const onRefresh = () => {
    fetchMatches();
  };

  return (
    <div className={styles["mainPageHeader"]}>
      <h1 className={fonts["montserrat-heading"]}>Match Tracker</h1>

      <div
        className={`${styles["error_message_button_group"]} ${fonts["inter-text"]}`}
      >
        {!isLoading && error && (
          <div className={styles["error_message"]}>
            <img
              src={errorIconUrl}
              className={styles["error_icon"]}
              alt="Error"
            />
            <p className={styles["error"]}>{`Ошибка: ${error}`}</p>
          </div>
        )}

        <div className={styles["button_group"]} onClick={onRefresh}>
          Обновить
          <img
            src={refreshIconUrl}
            className={styles["refresh_icon"]}
            alt="refresh"
          />
        </div>
      </div>
    </div>
  );
};

export const MainPageHeader = memo(MainPageHeaderComponent);
