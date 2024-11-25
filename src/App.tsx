import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RoiSimulation } from "./components/pages/RoiSimulation"

import { MainLayout } from './MainLayout';
const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/roi-simulation" element={<RoiSimulation />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
};

export default App;