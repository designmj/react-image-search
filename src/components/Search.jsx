import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchOption from './SearchOption'
import SearchTag from './SearchTag'
import SearchIcon from '../assets/search.svg?react'

const SearchBoxContainer = styled.div`
  display: flex;
  max-width: 1800px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
`
const SearchTagContainer = styled.div`
  display: flex;
  margin: 16px;
  padding: 4px 16px;
  width: 100%;
  overflow: auto;
  justify-content: center;
`
const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`
const SearchInput = styled.input`
  background: gray;
  font-size: 16px;
  background-color: transparent;
  color: #333333;
  border: none;
  flex: auto;
  padding: 10px 15px;
`
const SearchOptionButton = styled.p`
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`
const Search = ({ setQuery, setOrientation, setOrder, setCategory, setPerPage }) => {
  const [searchOption, setSearchOption] = useState(false)
  const savedSearchTags = localStorage.getItem('searchTags')
  const initialSearchTags = savedSearchTags ? JSON.parse(savedSearchTags) : []
  const [searchTags, setSearchTags] = useState(initialSearchTags)
  const inputRef = useRef(null)
  const toggleSearchOption = () => {
    setSearchOption((prev) => !prev)
  }
  const updateSearchInput = (value) => {
    inputRef.current.value = value
  }
  const onSearch = (e) => {
    if (e.key === 'Enter') {
      const currentValue = e.target.value
      setQuery(currentValue)
      setSearchTags((prev) => [...prev, currentValue])
      updateSearchInput('')
    }
  }

  const searchTag = (tag) => {
    setQuery(tag)
    updateSearchInput('')
  }
  const deleteTag = (index) => {
    const newSearchTags = [...searchTags]
    newSearchTags.splice(index, 1)
    setSearchTags(newSearchTags)
  }

  useEffect(() => {
    localStorage.setItem('searchTags', JSON.stringify(searchTags))
  }, [searchTags])

  return (
    <>
      <SearchBoxContainer>
        <SearchInputContainer>
          <SearchIcon width='22' fill='#333333' />
          <SearchInput
            placeholder='검색어를 입력해주세요.'
            ref={inputRef}
            onKeyDown={onSearch}

            // onChange={}
            // value={}
          />
          <SearchOptionButton onClick={toggleSearchOption}>
            검색 옵션 {searchOption ? '닫기' : '열기'}
          </SearchOptionButton>
        </SearchInputContainer>
      </SearchBoxContainer>
      {searchOption && (
        <SearchOption
          setOrder={setOrder}
          setOrientation={setOrientation}
          setCategory={setCategory}
          setPerPage={setPerPage}
        />
      )}
      <SearchTagContainer>
        {searchTags.map((tag, index) => (
          <SearchTag
            key={tag + index}
            tag={tag}
            searchTag={() => searchTag(tag)}
            deleteTag={() => deleteTag(index)}
          />
        ))}
      </SearchTagContainer>
    </>
  )
}

export default Search
