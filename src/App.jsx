import { useEffect, useState } from 'react'
import './App.css'
import getImage from './api/getImage'
import styled from 'styled-components'
import ResultContainer from './components/ResultContainer'
import Hero from './components/Hero'
import ToggleTheme from './components/ToggleTheme'

const Container = styled.div`
  position: relative;
  background-color: var(--primary);
  min-height: 100vh;
`

function App() {
  const [data, setData] = useState({})
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState('polular')
  const [orientation, setOrientation] = useState('all')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(20)
  const numOfPages = data.totalHits ? Math.ceil(data.totalHits / perPage) : 0

  useEffect(() => {
    const fetch = async () => {
      const data = await getImage({
        q: query,
        orientation: orientation,
        order: order,
        category: category,
        page: page,
        per_page: perPage,
      })
      setData(data)
      console.log(data)
    }
    fetch()
  }, [query, orientation, order, category, page, perPage])

  return (
    <>
      <Container>
        <Hero
          setQuery={setQuery}
          setOrder={setOrder}
          setOrientation={setOrientation}
          setCategory={setCategory}
          setPerPage={setPerPage}
        />
        <ResultContainer data={data} page={page} setPage={setPage} numOfPages={numOfPages} />
        <ToggleTheme />
      </Container>
    </>
  )
}

export default App
