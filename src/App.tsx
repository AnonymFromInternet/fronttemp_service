import { useEffect } from "react";
import styles from "./App.module.css";
import { useMatchesStore } from "./store/store";
import { MainPageHeader } from "./mainPageHeader/mainPageHeader";

function App() {
  const { matches, fetchMockMatches, error, isLoading } = useMatchesStore(
    (state) => state,
  );

  useEffect(() => {
    fetchMockMatches();
  }, [fetchMockMatches]);

  console.log("App component rendered");
  console.log("matches :", matches);
  console.log("");

  return (
    <div className={styles["wrapper"]}>
      <MainPageHeader error={error} isLoading={isLoading} />
      {/* <Matches matches={matches} isLoading={isLoading} /> */}
    </div>
  );
}

export default App;
