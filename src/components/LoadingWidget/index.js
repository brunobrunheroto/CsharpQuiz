import React from 'react';

import Widget from '../Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Loading ...
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          padding: '80px',
        }}
        src="https://static.wixstatic.com/media/474c38_4ed8f3903d164f308ee855c2ef6a4c44~mv2.gif"
      />
    </Widget>
  );
}

export default LoadingWidget;
