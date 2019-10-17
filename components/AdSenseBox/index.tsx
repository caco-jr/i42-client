import React from 'react';
import AdSense from 'react-adsense-ad';

import { AdSenseBoxWrapper } from './index.style';

interface Props {
  client?: string;
  slot: string;
  format?: string;
  responsive?: string;
  style?: React.CSSProperties;
}

const AdSenseBox = ({
  client = 'ca-pub-2787359838428098',
  slot,
  format = 'auto',
  responsive = 'true',
  style
}: Props) => {
  return (
    <AdSenseBoxWrapper style={style}>
      <AdSense.Google
        client={client}
        slot={slot}
        style={{ display: 'block', ...style }}
        format={format}
        responsive={responsive}
      />
    </AdSenseBoxWrapper>
  );
};

export default AdSenseBox;
