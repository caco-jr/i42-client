import React from 'react'

import { SvgLoaderInterface } from './svg-loader.interface'
import LogoImage from './svg/Logo'
import SearchIcon from './svg/Search'
import GearIcon from './svg/Gear'
import TextIcon from './svg/Text'
import SunIcon from './svg/Sun'
import PlanetIcon from './svg/Planet'
import PlayIcon from './svg/Play'

const SvgLoader = ({
  name,
  width,
  height,
  className = ''
}: SvgLoaderInterface) => {
  switch (name) {
    case 'logo':
      return <LogoImage width={width} height={height} className={className} />

    case 'gear':
      return <GearIcon width={width} height={height} className={className} />

    case 'text':
      return <TextIcon width={width} height={height} className={className} />

    case 'sun':
      return <SunIcon width={width} height={height} className={className} />

    case 'search':
      return <SearchIcon width={width} height={height} className={className} />

    case 'planet':
      return <PlanetIcon width={width} height={height} className={className} />

    case 'play':
      return <PlayIcon width={width} height={height} className={className} />
    default:
      return null
  }
}

export default SvgLoader
