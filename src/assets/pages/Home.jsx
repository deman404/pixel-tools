import React from 'react'
//hooks
import { ThemeProvider } from "../Hooks/ThemeContext";
//Components
import HeaderHome from '../components/HeaderHome';

function Home() {
  return (
    <>
      <ThemeProvider>
        <HeaderHome/>
      </ThemeProvider>
    </>
  )
}

export default Home