import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import './App.css';
import { AllCoinsPage } from './views/allCoinsPage';
import { CoinInfoPage } from './views/coinInfoPage';

function App() {
    const routesComponent = (
        <Routes>
            <Route path={'/'} element={<AllCoinsPage/>}  />
            <Route path={'one'} element={<CoinInfoPage/>}/>
        </Routes>)
    return <BrowserRouter>{routesComponent}</BrowserRouter>;
}

export default App;
