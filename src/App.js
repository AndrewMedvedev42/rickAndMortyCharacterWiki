import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'

import { MainPage } from "./pages/main";
import { CharacterPage } from "./pages/character";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
