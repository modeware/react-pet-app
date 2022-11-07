import './App.css';
import Nav from './components/Navigation/Nav';
import { Box } from '@chakra-ui/react';
import PetsTablePage from './pages/PetsTablePage/PetsTablePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from './pages/Overview/Overview';


function App() {
  return (
    <BrowserRouter>
      <Box h="100vh" className="App">
        
        <Nav text="PETS"/>
        <Routes>
          <Route path="/overview" element={<Overview/>}/>
          <Route path="/" element={<PetsTablePage/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
