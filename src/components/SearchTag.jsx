import React from 'react'
import styled from 'styled-components'
import DeleteIcon from '../assets/delete.svg?react'

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 16px;
  padding: 0px 12px;
  background-color: var(--highlight);
  cursor: pointer;
  &:hover {
    background-color: var(--overlay);
  }
  margin: 5px;
  width: fit-content;
`
const TagLabel = styled.span`
  margin-right: 5px;
  font-weight: 700;
  margin-right: 10px;
`

const SearchTag = ({ tag, searchTag, deleteTag }) => {
  return (
    <Tag onClick={searchTag}>
      <TagLabel>{tag}</TagLabel>
      <DeleteIcon
        width='15'
        onClick={(e) => {
          e.stopPropagation()
          deleteTag()
        }}
      />
    </Tag>
  )
}

export default SearchTag
