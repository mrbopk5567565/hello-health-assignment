import React from 'react';

interface IDecrementButton {
  lowerPageBound: number,
  onClick: () => void,
}

const DecrementButton: React.FC<IDecrementButton> = ({ lowerPageBound, onClick }) => {
  return (
    <>
      {
        lowerPageBound >= 1 &&
        <div className=''>
          <button onClick={onClick}> &hellip; </button>
        </div>
      }
    </>
  )
}

export default DecrementButton