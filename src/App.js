import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader";

const AllProjectsPage = lazy(() => import("./Pages/AllProjects"));
const Home_Page = lazy(() => import("./Pages/HomePage"));
const ProjectPage = lazy(() => import("./Pages/Project"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home_Page />
              </Suspense>
            }
          />
          <Route
            path="/all-projects"
            element={
              <Suspense fallback={<Loader />}>
                <AllProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="/project"
            element={
              <Suspense fallback={<Loader />}>
                <ProjectPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
