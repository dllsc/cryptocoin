import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllCoinsPage } from "./views/AllCoinsPage";
import { CoinInfoPage } from "./views/CoinInfoPage";
import { Header } from "./components/Header/Header";
import { useActions } from './hooks/useActions';

function App() {
    const { fetchAssets } = useActions();

    useEffect(() => {
        fetchAssets();
    }, []);

  const routesComponent = (
    <Routes>
      <Route path={"/"} element={<AllCoinsPage />} />
      <Route path={"one"} element={<CoinInfoPage />} />
    </Routes>
  );
  return (
    <BrowserRouter>
      <Header />
      {routesComponent}
    </BrowserRouter>
  );
}

export default App;
