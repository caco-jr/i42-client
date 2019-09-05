import React from 'react'

// import './input.scss';
import { InputInterface } from './input.interface'

const componentClassName = 'form-group'

const ValidationField = ({ message = '', isValid = true }) => {
  if (isValid) {
    return null
  }

  return (
    <span className={`${componentClassName}__error-message`}> {message} </span>
  )
}

const Input = ({
  name,
  label,
  type,
  value,
  handleChange,
  placeholder,
  errorMessage,
  isValid = true
}: InputInterface) => {
  const classError = isValid ? '' : `${componentClassName}__input--error`

  return (
    <div className={componentClassName}>
      <input
        id={name}
        className={`${componentClassName}__input ${classError}`}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />

      {label ? (
        <label htmlFor={name} className={`${componentClassName}__text`}>
          {label}
        </label>
      ) : null}

      <ValidationField isValid={isValid} message={errorMessage} />
    </div>
  )
}

export default Input
