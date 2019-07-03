import React from 'react'

// import './button.scss';
import { ButtonInterface } from './button.interface'

const Button = ({
  onClick,
  children,
  style,
  styleType,
  className,
  type,
  disabled
}: ButtonInterface) => {
  const componentClassName = 'button'
  const handleStyleType = () => {
    switch (styleType) {
      case 'confirm':
        return `${componentClassName}--confirm`

      case 'outline':
        return `${componentClassName}--outline`

      case 'basic':
        return `${componentClassName}--basic`

      default:
        return ''
    }
  }

  return (
    <button
      type={type}
      style={style}
      className={`${componentClassName} ${className} ${handleStyleType()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
