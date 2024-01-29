import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import StoryDetailsPage from './pages/StoryDetailsPage';
import CreateStoryPage from "./pages/CreateStoryPage";
import StoryListPage from "./pages/StoryListPage";
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/stories" element={<StoryListPage />} />
        <Route path="/story/:id" element={<StoryDetailsPage />} />
        <Route path="/new" element={<CreateStoryPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
