import { useState } from 'react';
import Home from './pages/Home';
import Cafe from "./pages/Cafe";
import Company from './pages/Company';
import WorkDetail from "./pages/WorkDetail";
import { works } from './data/works';

const App = () => {
  const [page, setPage] = useState<"home" | "cafe" | "workDetail" | "company">("home");
  const [selectedWorkId, setSelectedWorkId] = useState<string>("");
  const pageMap: Record<string, "cafe" | "company"> = {
    "/cafe":"cafe",
    "/company":"company",
  };

  const handleViewDemo = () => {
    const selectedWork = works.find(w => w.id === selectedWorkId);
    if(!selectedWork || !selectedWork.url){
      alert("ページ設定がありません。");
      return;
    }
    const nextPage = pageMap[selectedWork.url];
    if(nextPage){
      setPage(nextPage);
    } else {
      alert("精一杯準備中です！");
    }
  };
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
      {page === "company" && (
        <Company onBack={() => setPage("workDetail")} />
      )}
      {page === "workDetail" && (
        <WorkDetail
          id={selectedWorkId}
          onBack={() => setPage("home")}
          onViewDemo={handleViewDemo}
        />
      )}
    </>
  );
}

export default App;