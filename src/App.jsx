import React from 'react';
import Layout from './layouts/Layout';  
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PopularPage from './pages/PopularPage/PopularPage';
import AllPage from './pages/AllPage/AllPage';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/popular' element={<PopularPage />} />
          <Route path='/all' element={<AllPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;
