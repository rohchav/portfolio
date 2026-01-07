import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";

function App() {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <>
      <BrowserRouter basename={baseUrl}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
