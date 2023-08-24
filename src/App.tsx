/** React */
import React from 'react'
import { Route, Routes } from "react-router";
/** Tanstack-Query */
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
/** Page */
import HomePage from '@/page/HomePage.tsx'
import SideBar from '@components/common/sideBar/SideBar.tsx'
import Header from '@components/common/Header.tsx'
import BiblePage from '@page/BiblePage.tsx'
import PBSPage from '@page/PBSPage.tsx'
import QTPage from '@page/QTPage.tsx'
import QTCreatePage from '@page/QTCreatePage.tsx'
import PBSCreatePage from '@page/PBSCreatePage.tsx'

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header/>

      <SideBar/>

      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/bible"} element={<BiblePage/>}/>
        <Route path={"/pbs"} element={<PBSPage/>}/>
        <Route path={"/pbsCreate"} element={<PBSCreatePage/>}/>
        <Route path={"/qt"} element={<QTPage/>}/>
        <Route path={"/qtCreate"} element={<QTCreatePage/>}/>
      </Routes>

    </QueryClientProvider>
  );
};

export default App;