import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** Page */
import LoginPage from '@page/login/LoginPage.tsx';

import HomePage from '@page/HomePage.tsx';
import AdminPage from '@page/admin/AdminPage.tsx';

import NewTestamentPage from '@page/bible/NewTestamentPage.tsx';
import OldTestamentPage from '@page/bible/OldTestamentPage.tsx';

import PbsPage from '@page/pbs/PbsPage.tsx';
import PbsEditPage from '@page/pbs/PbsEditPage.tsx';
import PbsCreatePage from '@page/pbs/PbsCreatePage.tsx';
import PbsDetailPage from '@page/pbs/PbsDetailPage.tsx';

import QtPage from '@page/qt/QtPage.tsx';
import QtEditPage from '@page/qt/QtEditPage.tsx';
import QtCreatePage from '@page/qt/QtCreatePage.tsx';
import QtDetailPage from '@page/qt/QtDetailPage.tsx';

import MyPage from '@page/myPage/MyPage.tsx';
import MyGraphPage from '@page/myPage/MyGraphPage.tsx';
/** Query-Client */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/** Atom */
import { RecoilRoot } from 'recoil';
/** Libs */
import ScrollToTop from '@/libs/ScrollToTop.ts';
/** Component */
import AuthRoutes from '@page/common/AuthRoutes.tsx';
/** Style */
import ResetStyle from '@/App.styled.ts';
import { StyledEngineProvider } from '@mui/styled-engine';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ResetStyle/>

          <BrowserRouter>
            <ScrollToTop/>

            <Routes>
              <Route path={"/"} element={<LoginPage/>} />

              <Route element={<AuthRoutes/>}>

                <Route path={"/home"}>
                  <Route path={""} element={<HomePage/>}/>
                  <Route path={"admin"} element={<AdminPage/>} />

                  <Route path={"pbs"}>
                    <Route path={""} element={<PbsPage/>}/>
                    <Route path={"create"} element={<PbsCreatePage/>}/>
                    <Route path={"edit/:id"} element={<PbsEditPage/>}/>
                    <Route path={":id"} element={<PbsDetailPage/>}/>
                  </Route>

                  <Route path={"qt"}>
                    <Route path={""} element={<QtPage/>}/>
                    <Route path={"create"} element={<QtCreatePage/>}/>
                    <Route path={"edit/:id"} element={<QtEditPage/>}/>
                    <Route path={":id"} element={<QtDetailPage/>}/>
                  </Route>

                  <Route path={"myPage"}>
                    <Route path={""} element={<MyPage/>}/>
                    <Route path={"graph"} element={<MyGraphPage/>}/>
                  </Route>

                  <Route path={"oldTestament"} element={<OldTestamentPage/>}/>
                  <Route path={"newTestament"} element={<NewTestamentPage/>}/>
                </Route>

              </Route>

            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
