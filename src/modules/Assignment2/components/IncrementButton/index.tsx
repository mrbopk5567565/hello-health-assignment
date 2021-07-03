import React from 'react';

interface IIncrementButton {
  pageNumbers: number,
  onClick: () => void,
  upperPageBound: number,
}

const IncrementButton: React.FC<IIncrementButton> = ({ pageNumbers, upperPageBound, onClick }) => {
  return (
    <>
      {
        pageNumbers > upperPageBound &&
        <div className=''>
          <button onClick={onClick}> &hellip; </button>
        </div>
      }
    </>
  )
}

export default IncrementButton