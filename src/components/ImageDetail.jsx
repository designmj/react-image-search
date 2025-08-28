import React from 'react'
import styled from 'styled-components'
import DeleteBtn from '../assets/delete.svg?react'

const ImageDetailWrap = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  color: var(--text);
  min-width: 300px;
  max-width: 80%;
  max-height: 80%;
  background-color: var(--primary);
  padding: 15px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  overflow: auto;
`
const ImgDetail = styled.img`
  width: 100%;
`
const ImageDetail = ({ currentImgDetail, setCurrentImgDetail }) => {
  const { likes, tags, views, largeImageURL } = currentImgDetail
  return (
    <ImageDetailWrap>
      <DeleteBtn
        width='20px'
        cursor='pointer'
        onClick={() => setCurrentImgDetail(null)}></DeleteBtn>
      <ImgDetail src={largeImageURL}></ImgDetail>
      <p>tag : {tags}</p>
      <p>likes : {likes}</p>
      <p>views : {views}</p>
    </ImageDetailWrap>
  )
}

export default ImageDetail
