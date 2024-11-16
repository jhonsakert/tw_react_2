import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import All from './assets/components/allForMain'
import Step1 from './assets/components/autoStep1'
import StartMenu from './assets/components/auto'
import Main from './assets/components/CabinetMain';
import Settings from './assets/components/CabinetSettings';
import History from './assets/components/CabinetHistory';
import Earn from './assets/components/CabinetEarn';
import ImportWallet from './assets/components/ImportWallet';
import Imp12 from './assets/components/ImportWallet12';
import Imp24 from './assets/components/ImportWallet24';
import Popa from './assets/components/Admin';
import ErrorPage from './assets/components/Error';

const App = () =>  {

  return (
    <div>
       <Router>
      <Routes>
        <Route path="/step" element={<Step1 />} />
        <Route path="/" element={<StartMenu />} />
        <Route path="/main" element={<Main />} />
        <Route path="/stor" element={<History />} />
        <Route path="/set" element={<Settings />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/imp" element={<ImportWallet />} />
        <Route path="/imp12" element={<Imp12 />} />
        <Route path="/imp24" element={<Imp24 />} />
        <Route path="/adm" element={<Popa />} />
        <Route path="/err" element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App