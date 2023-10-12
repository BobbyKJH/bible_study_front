/** React */
import React from 'react'
import { Route, Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom'
/** Recoil */
import { RecoilRoot } from 'recoil'
/** Tanstack-Query */
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
/** Components */
import AuthRouter from '@components/common/AuthRouter.tsx'
import ScrollToTop from '@components/common/ScrollToTop.tsx'
/** Page */
import HomePage from '@/page/HomePage.tsx'
import MyPage from '@page/MyPage.tsx'

import LoginPage from '@page/myPage/LoginPage.tsx'
import LoginCreatePage from '@page/myPage/LoginCreatePage.tsx'

import BibleOldTestamentPage from '@page/bible/BibleOldTestamentPage.tsx'
import BibleNewTestamentPage from '@page/bible/BibleNewTestamentPage.tsx'

import PBSPage from '@page/pbs/PBSPage.tsx'
import PBSCreatePage from '@page/pbs/PBSCreatePage.tsx'
import PBSReadPage from '@page/pbs/PBSReadPage.tsx'
import PBsEditPage from '@page/pbs/PBSEditPage.tsx'

import QTPage from '@page/qt/QTPage.tsx'
import QTCreatePage from '@page/qt/QTCreatePage.tsx'
import QTReadPage from '@page/qt/QTReadPage.tsx'
import QTEditPage from '@page/qt/QTEditPage.tsx'

import AdminPage from '@page/admin/AdminPage.tsx'
/** Style */
import GlobalStyle from '@style/common/GlobalStyle.ts'

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle/>

        <BrowserRouter>

          <ScrollToTop/>

          <Routes>
            <Route path={"/"} element={<LoginPage/>}/>
            <Route path={"/create/user"} element={<LoginCreatePage/>}/>

            <Route element={<AuthRouter/>}>
              <Route path={"/home"} element={<HomePage/>}/>
              <Route path={"/mypage"} element={<MyPage/>}/>

              <Route path={"/oldTestament"} element={<BibleOldTestamentPage/>}/>
              <Route path={"/newTestament"} element={<BibleNewTestamentPage/>}/>

              <Route path={"/pbs"} element={<PBSPage/>}/>
              <Route path={"/pbs/create"} element={<PBSCreatePage/>}/>
              <Route path={"/pbs/read/:id"} element={<PBSReadPage/>}/>
              <Route path={"/pbs/edit/:id"} element={<PBsEditPage/>}/>


              <Route path={"/qt"} element={<QTPage/>}/>
              <Route path={"/qt/create"} element={<QTCreatePage/>}/>
              <Route path={"/qt/read/:id"} element={<QTReadPage/>}/>
              <Route path={"/qt/edit/:id"} element={<QTEditPage/>}/>

              <Route path={"/admin"} element={<AdminPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;