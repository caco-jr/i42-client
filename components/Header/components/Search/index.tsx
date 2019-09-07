import React, { useState } from 'react';
import { withRouter } from 'next/router';

import { SearchWrapper } from './index.style';
import { SearchInterface } from './search.interface';
import Button from '@components/Button';
import SvgLoader from '@components/SvgLoader';
import Input from '@components/Input';

const Search = ({ router }: SearchInterface) => {
  const componentClassName = 'c-search';
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;

    setInput(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input) {
      router.push(`/busca?q=${input}`);
    }
  };

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <Button
        type="submit"
        styleType="basic"
        className={`${componentClassName}__button`}
        aria-label="Buscar posts"
        aria-labelledby="search"
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
    </SearchWrapper>
  );
};

export default withRouter(Search);
