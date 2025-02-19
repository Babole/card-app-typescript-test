import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import AllEntries from "./routes/AllEntries";
import NewEntry from "./routes/NewEntry";
import EditEntry from "./routes/EditEntry";
import { EntryProvider } from "./utilities/globalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    console.log(darkMode)
  }, [darkMode])

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="min-h-screen dark:bg-zinc-900">
        <Router>
          <EntryProvider>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode}></NavBar>
            <Routes>
              <Route path="/" element={<AllEntries />}></Route>
              <Route path="create" element={<NewEntry />}></Route>
              <Route path="edit/:id" element={<EditEntry />}></Route>
            </Routes>
          </EntryProvider>
        </Router>
      </section>
    </div>
  );
}
