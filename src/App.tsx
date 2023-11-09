import AuthRoutes from '@page/common/AuthRoutes.tsx';
import HomePage from '@page/login/HomePage.tsx';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoutes/>}>
          <Route path={"/home"} element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
