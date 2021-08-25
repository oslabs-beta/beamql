import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ key, columns }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        isConnectable={isConnectable}
      />
      <div>
        <div><strong>{key}</strong></div>
        {columns.map(el => <div>{el.column_name}</div>)}
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});