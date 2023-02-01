import React, {useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar.jsx';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/globalStyles.js";
import { lightTheme, darkTheme } from "./styles/themes.js"
import  {useDarkMode} from "./components/useDarkMode"


//Pages
import { Home } from './components/home.jsx';
import { Projects } from './components/projects.jsx';
import { Skills } from './components/skills.jsx';
import { Contact } from './components/contact.jsx';
import { NoPage } from './components/NoPage.jsx';

export const App = () => {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <BrowserRouter>
    <GlobalStyles />
  <NavBar themeToggler={themeToggler}/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='skills' element={<Skills />} />
    <Route path='projects' element={<Projects />} />
    <Route path='contact' element={<Contact />} />
    <Route path='*' element={<NoPage />} />
  </Routes>
  </BrowserRouter>
  </>
    </ThemeProvider>
  )
};