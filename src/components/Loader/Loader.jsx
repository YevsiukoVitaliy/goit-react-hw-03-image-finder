import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div style={{ margin: 'auto' }}>
      <RotatingSquare
        ariaLabel="rotating-square"
        visible={true}
        color="#3F51B5"
        strokeWidth="10"
      />
    </div>
  );
}
