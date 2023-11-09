import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** Query-Client */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/** Atom */
import { RecoilRoot } from 'recoil';
/** Page */
import HomePage from '@page/HomePage.tsx';
import LoginPage from '@page/login/LoginPage.tsx';
import AuthRoutes from '@page/common/AuthRoutes.tsx';
/** Style */
import ResetStyle from '@/App.styled.ts';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ResetStyle/>
        
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<LoginPage/>} />

            <Route element={<AuthRoutes/>}>
              <Route path={"/home"} element={<HomePage/>} />
            </Route>

          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
