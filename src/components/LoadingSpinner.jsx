import { useState } from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

// Necessary Boilerplate for react-spinners library
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function LoadingSpinner() {
  // useState Functions
  let [loading] = useState(true);
  let [color] = useState('#ffffff');

  return (
    <div>
      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default LoadingSpinner;
