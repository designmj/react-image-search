import React from 'react'
import styled from 'styled-components'
const SearchOptionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`
const SearchOptionUl = styled.ul`
  padding: 0;
`

const SearchOptionLi = styled.li`
  list-style: none;
  margin: 15px 0;
  text-align: center;
  color: var(--text);
`

const SearchOptionLabel = styled.p`
  border: 1px solid var(--highlight);
  color: var(--highlight);
  padding: 4px;
  border-radius: 16px;
  text-align: center;
`
const SearchOption = ({ setOrder, setOrientation, setCategory, setPerPage }) => {
  return (
    <SearchOptionContainer>
      <SearchOptionUl>
        <SearchOptionLi>
          <SearchOptionLabel>정렬</SearchOptionLabel>
          <form id='order' onChange={(e) => setOrder(e.target.value)}>
            <input type='radio' name='order' id='latest' value='latest' />
            <label htmlFor='latest'>최신순</label>
            <input type='radio' name='order' id='popular' value='popular' defaultChecked={true} />
            <label htmlFor='popular'>인기순</label>
          </form>
        </SearchOptionLi>
        <SearchOptionLi>
          <SearchOptionLabel>사진 방향</SearchOptionLabel>
          <form id='orientation' onChange={(e) => setOrientation(e.target.value)}>
            <input type='radio' name='orientation' id='all' value='all' defaultChecked={true} />
            <label htmlFor='latest'>모두</label>
            <input type='radio' name='orientation' id='horizontal' value='horizontal' />
            <label htmlFor='horizontal'>가로</label>
            <input type='radio' name='orientation' id='vertical' value='vertical' />
            <label htmlFor='vertical'>세로</label>
          </form>
        </SearchOptionLi>
        <SearchOptionLi>
          <SearchOptionLabel>카테고리</SearchOptionLabel>
          <form id='category' onChange={(e) => setCategory(e.target.value)}>
            <input type='radio' name='category' id='all' value='all' defaultChecked={true} />
            <label htmlFor='all'>모두</label>
            <input type='radio' name='category' id='fashion' value='fashion' />
            <label htmlFor='fashion'>패션</label>
            <input type='radio' name='category' id='nature' value='nature' />
            <label htmlFor='nature'>자연</label>
          </form>
        </SearchOptionLi>
        <SearchOptionLi>
          <SearchOptionLabel>페이지 당 이미지 갯수</SearchOptionLabel>
          <form id='per_page' onChange={(e) => setPerPage(e.target.value)}>
            <input type='radio' name='per_page' id='10' value='10' />
            <label htmlFor='10'>10</label>
            <input type='radio' name='per_page' id='20' value='20' defaultChecked={true} />
            <label htmlFor='20'>20</label>
            <input type='radio' name='per_page' id='30' value='30' />
            <label htmlFor='30'>30</label>
          </form>
        </SearchOptionLi>
      </SearchOptionUl>
    </SearchOptionContainer>
  )
}

export default SearchOption
