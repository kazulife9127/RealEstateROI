import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoiSimulation } from "./components/pages/RoiSimulation";
import { Spreadsheet } from './components/pages/Spreadsheet';
import { MainLayout } from './MainLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<RoiSimulation />} />
              <Route path="/roi-simulation" element={<RoiSimulation />} />
              <Route path="/spreadsheet" element={<Spreadsheet />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
};

export default App;