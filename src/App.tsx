import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** Query */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/** Recoil */
import { RecoilRoot } from 'recoil';
/** Page */
import AuthRoutes from '@/page/auth/AuthRoutes';

import LoginPage from '@/page/LoginPage';
import JoinPage from '@/page/JoinPage';

import HomePage from '@/page/HomePage';

import PbsPage from '@/page/pbs/PbsPage';
import PbsCreatePage from '@/page/pbs/PbsCreatePage';
import PbsEditPage from '@/page/pbs/PbsEditPage';
import PbsDetailPage from '@/page/pbs/PbsDetailPage';

import QtPage from '@/page/qt/QtPage';
import QtEditPage from '@/page/qt/QtEditPage';
import QtCreatePage from '@/page/qt/QtCreatePage';
import QtDetailPage from '@/page/qt/QtDetailPage';

import MyPage from '@/page/auth/myPage/MyPage';

import AdminPage from '@/page/admin/AdminPage';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/join' element={<JoinPage/>}/>

            <Route element={<AuthRoutes/>}>
              <Route path="/home">
                <Route path='' element={<HomePage/>}/>

                <Route path='pbs'>
                  <Route path='' element={<PbsPage/>}/>
                  <Route path='create' element={<PbsCreatePage/>}/>
                  <Route path='edit/:id' element={<PbsEditPage/>}/>
                  <Route path=':id' element={<PbsDetailPage/>}/>
                </Route>

                <Route path='qt'>
                  <Route path='' element={<QtPage/>}/>
                  <Route path='create' element={<QtCreatePage/>}/>
                  <Route path='edit/:id' element={<QtEditPage/>}/>
                  <Route path=':id' element={<QtDetailPage/>}/>
                </Route>

                <Route path='myPage'>
                  <Route path='' element={<MyPage/>}/>
                </Route>

                <Route path='admin'>
                  <Route path='' element={<AdminPage/>}/>
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
