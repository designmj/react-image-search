import React, { useState } from 'react'
import Pagination from './Pagination'
import ImageCard from './ImageCard'
import styled from 'styled-components'
import EmptyResult from './EmptyResult'
import ImageDetail from './ImageDetail'

const Container = styled.div`
  max-width: 1800px;
  margin: 10px auto;
`
const ImageCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
const ResultContainer = ({ data, page, setPage, numOfPages }) => {
  const [currentImgDetail, setCurrentImgDetail] = useState(null)
  return (
    <Container>
      {currentImgDetail && (
        <ImageDetail
          currentImgDetail={currentImgDetail}
          setCurrentImgDetail={setCurrentImgDetail}
        />
      )}
      <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
      <ImageCardWrapper>
        {data.hits?.length > 0 ? (
          data.hits?.map((imgData) => (
            <ImageCard
              key={imgData.id}
              imgData={imgData}
              onClick={() => setCurrentImgDetail(imgData)}
            />
          ))
        ) : (
          <EmptyResult />
        )}
      </ImageCardWrapper>
    </Container>
  )
}

export default ResultContainer
