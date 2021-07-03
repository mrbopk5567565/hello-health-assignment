import React from 'react';

interface INextButton {
  isNextBtnActive: string,
  onClick: () => void,
}

const NextButton: React.FC<INextButton> = ({ isNextBtnActive, onClick }) => {
  return (
    <>
      {
        isNextBtnActive === 'disabled'
          ?
          <div className={isNextBtnActive}>
            <button id="btnNext"> Next </button>
          </div>
          :
          <div className={isNextBtnActive}>
            <button id="btnNext" onClick={onClick}> Next </button>
          </div>
      }
    </>
  )
}

export default NextButton