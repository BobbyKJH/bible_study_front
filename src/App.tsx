/** React */
import React from 'react'
import { Route, Routes } from "react-router";
import { BrowserRouter } from 'react-router-dom'
/** Tanstack-Query */
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
/** Components */
import SideBar from '@components/common/sideBar/SideBar.tsx'
import Header from '@components/common/Header.tsx'
/** Page */
import HomePage from '@/page/HomePage.tsx'
import BibleOldTestamentPage from '@page/bible/BibleOldTestamentPage.tsx'
import BibleNewTestamentPage from '@page/bible/BibleNewTestamentPage.tsx'
import PBSPage from '@page/pbs/PBSPage.tsx'
import PBSCreatePage from '@page/pbs/PBSCreatePage.tsx'
import PBSReadPage from '@page/pbs/PBSReadPage.tsx'
import QTPage from '@page/qt/QTPage.tsx'
import QTCreatePage from '@page/qt/QTCreatePage.tsx'
import QTReadPage from '@page/qt/QTReadPage.tsx'
/** Style */
import GlobalStyle from '@style/common/GlobalStyle.ts'

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle/>

      <BrowserRouter>
      <Header/>

      <SideBar/>

      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/oldTestament"} element={<BibleOldTestamentPage/>}/>
        <Route path={"/newTestament"} element={<BibleNewTestamentPage/>}/>

        <Route path={"/pbs"} element={<PBSPage/>}/>
        <Route path={"/pbs/create"} element={<PBSCreatePage/>}/>
        <Route path={"/pbs/read/:id"} element={<PBSReadPage/>}/>

        <Route path={"/qt"} element={<QTPage/>}/>
        <Route path={"/qt/create"} element={<QTCreatePage/>}/>
        <Route path={"/qt/read/:id"} element={<QTReadPage/>}/>
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;