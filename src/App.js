import { Routes, Route } from 'react-router-dom';
import './sass/styles.scss';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
function App() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Pokedex' element={<Pokedex />} />
            <Route path='/Pokedex/:key' element={<Pokedex />} />
        </Routes>
    );
}

export default App;
