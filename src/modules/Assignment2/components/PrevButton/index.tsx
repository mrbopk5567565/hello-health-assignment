import React from 'react';

interface IPrevButton {
  isPrevBtnActive: string,
  onClick: () => void,
}

const PrevButton: React.FC<IPrevButton> = ({ isPrevBtnActive, onClick }) => {
  return (
    <>
      {
        isPrevBtnActive === 'disabled'
          ?
          <div className={isPrevBtnActive}>
            <button id="btnPrev"> Prev </button>
          </div>
          :
          <div className={isPrevBtnActive}>
            <button id="btnPrev" onClick={onClick}> Prev </button>
          </div>
      }
    </>
  )
}

export default PrevButton