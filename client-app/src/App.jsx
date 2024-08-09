import { Routes } from 'react-router'
import { Route } from 'react-router-dom'

import './App.css'
import HomeComp from './components/HomeComp'
import LatestPostsComp from './components/LatestPostsComp'
import NavBarComp from './components/NavBarComp'
import SpecificThemeComp from './components/SpecificThemeComp'
import LoginComp from './components/login/LoginComp'
import RegisterComp from './components/register/RegisterComp'
function App() {
  return (
    <>
      <NavBarComp />
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/latest-posts" element={<LatestPostsComp />} />
        <Route path="/specific-theme" element={<SpecificThemeComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path='/register' element={<RegisterComp />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
