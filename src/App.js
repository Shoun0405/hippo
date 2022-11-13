import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddMarket from './pages/AddMarket';

function App() {  
  return (
    <>
    <Routes>
        <Route path={'/'} element={<AddMarket/>} />
    </Routes>
    </>
  );
}

export default App;
