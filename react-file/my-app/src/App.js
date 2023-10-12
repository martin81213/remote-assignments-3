import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { LikeButton } from './css/LikeButtonStyle.js';
import QAbox from './component/QA';

const ContainerWithBorder = styled.div`
  border: 1px solid #007bff;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
`;

function LikeButtonComponent() {
  const [count, setCount] = useState(5);
  const [plusMinus, setPlusMinus] = useState(true);

  const handleLikeClick = () => {
    if (plusMinus) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setPlusMinus(!plusMinus);
  }

  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]); // 

  return (
    <ContainerWithBorder>
      <div>
        <QAbox></QAbox>
      </div>
      <div>
        <LikeButton onClick={handleLikeClick}>👍{count}</LikeButton>
      </div>
    </ContainerWithBorder>
  );
}

export default LikeButtonComponent;
