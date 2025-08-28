import React, { useEffect, useState } from 'react'
import LightThemeBtn from '../assets/lightMode.svg?react'
import DarkThemeBtn from '../assets/DarkMode.svg?react'
import styled from 'styled-components'

const ThemeBtn = styled.div`
  position: fixed;
  right: 15px;
  top: 0;
  width: 50px;
  height: 80px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const ToggleTheme = () => {
  const initialTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  const [theme, setTheme] = useState(initialTheme)
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeBtn onClick={toggleTheme}>
      {theme === 'light' ? (
        <DarkThemeBtn width='35' style={{ fill: 'var(--primary)' }}></DarkThemeBtn>
      ) : (
        <LightThemeBtn width='50' fill='var(--primary)'></LightThemeBtn>
      )}
    </ThemeBtn>
  )
}

export default ToggleTheme
