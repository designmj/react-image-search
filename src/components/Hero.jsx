import React from 'react'
import Search from './Search'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--secondary);
  padding: 80px 20px 20px 20px;
`
const Hero = ({ setQuery, setOrientation, setOrder, setCategory, setPerPage }) => {
  return (
    <Container>
      <Search
        setQuery={setQuery}
        setOrder={setOrder}
        setOrientation={setOrientation}
        setCategory={setCategory}
        setPerPage={setPerPage}
      />
    </Container>
  )
}

export default Hero
