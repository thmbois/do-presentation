import React from 'react';

export default ({ id = '', platform = 'ios', preview = 'true' }) => (
  <div>
    <div
      data-snack-id={id}
      data-snack-platform={platform}
      data-snack-preview={preview}
      style={{
        overflow: 'hidden',
        background: '#fafafa',
        border: '1px solid rgba(0,0,0,.16)',
        borderRadius: '4px',
        height: '514px',
        width: '100%',
      }}
    />
  </div>
);
