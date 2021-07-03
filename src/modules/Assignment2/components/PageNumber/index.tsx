import React, { MouseEvent } from 'react';

interface IPageNumber {
  upperPageBound: number,
  onClick: (event: MouseEvent<HTMLButtonElement>, number) => void,
  pageNumbers: number,
  currentPage: number,
  lowerPageBound: number,
}

// Array.from({length: 10}, (_, i) => i + 1)

const PageNumber: React.FC<IPageNumber> = ({ 
  pageNumbers, 
  onClick , 
  currentPage, 
  upperPageBound,
  lowerPageBound,
}) => {
  return (
    <>
      {Array.from({length: pageNumbers}, (_, i) => i + 1).map((number) => {
        return (
          (number === 1 && currentPage === 1) ?
            <div key={number} className='active' id={`${number}`}>
              <button id={`${number}`} onClick={(event) => onClick(event, number)}>{number}</button>
            </div>
            :
            ((number < upperPageBound + 1) && number > lowerPageBound) &&
            <div key={number} id={`${number}`} className={`${currentPage === number ? 'active' : ''}`}>
              <button id={`${number}`} onClick={(event) => onClick(event, number)}>{number}</button>
            </div>
        )
      })
      }
    </>
  )
}

export default PageNumber