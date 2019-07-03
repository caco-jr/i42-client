import React, { useState } from 'react'
import { withRouter } from 'next/router'

// import './style.scss'
import { SearchInterface } from './search.interface'
import Button from '@components/Button'
import Input from '@components/Input'
import SvgLoader from '@components/SvgLoader'

const Search = (props: SearchInterface) => {
  const componentClassName = 'c-search'
  const [input, setInput] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const value = target.value

    setInput(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (input) {
      // props.history.push(`/search?s=${input}`);

      setInput('')
    }
  }

  return (
    <form className={componentClassName} onSubmit={handleSubmit}>
      <Button
        type="submit"
        styleType="basic"
        className={`${componentClassName}__button`}
      >
        <SvgLoader name="search" className={`${componentClassName}__icon`} />
      </Button>

      <Input
        key="search"
        type="search"
        name="search"
        value={input}
        placeholder="buscar..."
        handleChange={handleInputChange}
        isValid={true}
        errorMessage=""
      />
    </form>
  )
}

export default withRouter(Search)
