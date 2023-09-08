import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SearchWrapper from './components/SearchWrapper';
import FlagDetails from './components/FlagDetails';



function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchWrapper />} />
          <Route path="/details/:id" element={<FlagDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
