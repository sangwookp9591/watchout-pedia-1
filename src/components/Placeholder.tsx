import React from 'react';
import styled from '@emotion/styled';

import Skeleton from './Skeleton';
import Spacer from './Spacer';

const Base = styled.div`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  margin: 5px 10px 0 0;
`;

interface Props {}

const Placeholder: React.FC<Props> = () => {
  return (
    <Base>
      <Skeleton
        width={200}
        height={300}
      />
      <Info>
        <Skeleton width={40} height={17} />
        <Spacer size={3} axis="vertical"  />
        <Skeleton />
      </Info>
    </Base>
  )
}

export default Placeholder;
