import React from 'react';
import './styles.scss'

interface IButton {
  children: React.ReactChild,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  className?: string
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  className
}) => {
  return (
    <button className={`root ${className}`} onClick={onClick}>{children}</button>
  )
}

export default Button