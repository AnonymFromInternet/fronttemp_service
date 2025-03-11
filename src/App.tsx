import { useEffect } from "react";
import styles from "./App.module.css";
import { useMatchesStore } from "./store/store";
import { MainPageHeader } from "./components/mainPageHeader/mainPageHeader";
import { Matches } from "./components/matches/Matches";

function App() {
  const { matches, fetchMockMatches, error, isLoading } = useMatchesStore(
    (state) => state,
  );

  useEffect(() => {
    fetchMockMatches();
  }, [fetchMockMatches]);

  return (
    <div className={styles["wrapper"]}>
      <MainPageHeader
        error={error}
        isLoading={isLoading}
        fetchMatches={fetchMockMatches}
      />
      <Matches matches={matches} isLoading={isLoading} />
    </div>
  );
}

export default App;
