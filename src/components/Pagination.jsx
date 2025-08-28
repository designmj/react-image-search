import React from 'react'
import styled from 'styled-components'
import PrevBtn from '../assets/prevBtn.svg?react'
import NextBtn from '../assets/nextBtn.svg?react'

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px;
  color: var(--text);
`
const PageSelect = styled.select`
  border: none;
  padding: 10px;
  background-color: var(--primary);
  font-size: 16px;
  color: var(--text);
`
const Pagination = ({ page, setPage, numOfPages }) => {
  return (
    <PaginationWrap>
      {page !== 1 && (
        <PrevBtn
          width='20'
          cursor='pointer'
          fill='var(--primary)'
          onClick={() => setPage((prev) => prev - 1)}></PrevBtn>
      )}
      {`총 ${numOfPages} 페이지`}
      <PageSelect name='page' value={page} onChange={(e) => setPage(parseInt(e.target.value))}>
        {[...Array(numOfPages)].map((data, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </PageSelect>
      {page !== numOfPages && (
        <NextBtn
          width='20'
          cursor='pointer'
          fill='var(--primary)'
          onClick={() => setPage((prev) => prev + 1)}></NextBtn>
      )}
    </PaginationWrap>
  )
}

export default Pagination
