import React from 'react';

import LogoImage from './svg/Logo';
import SearchIcon from './svg/Search';
import GearIcon from './svg/Gear';
import TextIcon from './svg/Text';
import SunIcon from './svg/Sun';
import PlanetIcon from './svg/Planet';
import PlayIcon from './svg/Play';
import ArrowIcon from './svg/Arrow';

interface Props {
  name:
    | 'logo'
    | 'gear'
    | 'text'
    | 'sun'
    | 'search'
    | 'planet'
    | 'play'
    | 'arrow';
  width?: string;
  height?: string;
  className?: string;
}

const SvgLoader = ({ name, width, height, className = '' }: Props) => {
  switch (name) {
    case 'logo':
      return <LogoImage width={width} height={height} className={className} />;

    case 'gear':
      return <GearIcon width={width} height={height} className={className} />;

    case 'text':
      return <TextIcon width={width} height={height} className={className} />;

    case 'sun':
      return <SunIcon width={width} height={height} className={className} />;

    case 'search':
      return <SearchIcon width={width} height={height} className={className} />;

    case 'planet':
      return <PlanetIcon width={width} height={height} className={className} />;

    case 'play':
      return <PlayIcon width={width} height={height} className={className} />;

    case 'arrow':
      return <ArrowIcon width={width} height={height} className={className} />;

    default:
      return null;
  }
};

export default SvgLoader;
