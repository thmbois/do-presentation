import React from 'react';
import QRCode from 'qrcode.react';

import {
  Link,
  Layout,
  Fill,
  Fit
} from 'spectacle';

export default ({ showLink = true ,value, bgColor = "rgba(0,0,0,0)", size = "256" }) => (
  <div>
    <QRCode value={value} bgColor={bgColor} size={size} />
    {showLink && <Link href={value}>{value}</Link>}
  </div>
);
