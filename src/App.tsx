/** React */
import React from 'react'
import { Route, Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom'
/** Recoil */
import { RecoilRoot } from 'recoil'
/** React-Query */
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
/** Components */
import AuthRouter from '@components/common/AuthRouter.tsx'
import ScrollToTop from '@components/common/ScrollToTop.tsx'
/** Page */
import HomePage from '@/page/HomePage.tsx'

import MyPage from '@page/myPage/MyPage.tsx'
import MyPageQT from '@page/myPage/MyPageQT.tsx'
import MyPagePBS from '@page/myPage/MyPagePBS.tsx'

import LoginPage from '@page/login/LoginPage.tsx'
import LoginCreatePage from '@page/login/LoginCreatePage.tsx'

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

              <Route path={"mypage"}>
                <Route path={""} element={<MyPage/>}/>
                <Route path={"pbs"} element={<MyPagePBS/>}/>
                <Route path={"qt"} element={<MyPageQT/>}/>
              </Route>

              <Route path={"/oldTestament"} element={<BibleOldTestamentPage/>}/>
              <Route path={"/newTestament"} element={<BibleNewTestamentPage/>}/>

              <Route path={"pbs"}>
                <Route path={""} element={<PBSPage/>}/>
                <Route path={"create"} element={<PBSCreatePage/>}/>
                <Route path={"read/:id"} element={<PBSReadPage/>}/>
                <Route path={"edit/:id"} element={<PBsEditPage/>}/>
              </Route>

              <Route path={"qt"}>
                <Route path={""} element={<QTPage/>}/>
                <Route path={"create"} element={<QTCreatePage/>}/>
                <Route path={"read/:id"} element={<QTReadPage/>}/>
                <Route path={"edit/:id"} element={<QTEditPage/>}/>
              </Route>

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