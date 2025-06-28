import { useState } from 'react';
import Home from './pages/Home';
import Cafe from "./pages/Cafe";
import WorkDetail from "./pages/WorkDetail";

const App = () => {
  const [page, setPage] = useState<"home" | "cafe" | "workDetail">("home");
  const [selectedWorkId, setSelectedWorkId] = useState<string>("");

  return (
    <>
      {page === "home" && (
        <Home
          onSelectWork={(id) => {
            setSelectedWorkId(id);
            setPage("workDetail");
          }}
        />
      )}
      {page === "cafe" && (
        <Cafe onBack={() => setPage("workDetail")} />
      )}
      {page === "workDetail" && (
        <WorkDetail
          workId={selectedWorkId}
          onBack={() => setPage("home")}
          onViewDemo={() => setPage("cafe")}
        />
      )}
    </>
  );
}

export default App;