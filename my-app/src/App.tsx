import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './components/home';
import DefaultHeader from './components/containers/default/DefaultHeader';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/containers/default';
import Login from './components/login';
import NotFoundPage from './components/notFound';
import CategoryCreatePage from './components/categories/create';
const App = () => {

  // useEffect(() => {
  //   console.log("use effect App");
  //   axios.get("http://localhost:8083/api/categories")
  //     .then(resp => {
  //       console.log("Server result", resp);
  //     });
  // }, []);
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="categories/create" element={<CategoryCreatePage />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
