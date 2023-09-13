import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FlagDetails from './components/FlagDetails';
import Edit from './components/Edit';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<FlagDetails />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>     
  )
}

export default App
