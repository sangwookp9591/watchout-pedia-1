import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface Props {
  axis: 'horizontal' | 'vertical';
  size: number;
}

const Base = styled.span<Props>`
  display: ${({ axis }) => (axis === 'vertical' ? 'block' : 'inline-block')};
  ${({ axis, size }) =>
  axis === 'horizontal' &&
  css`
      width: ${size}px;
    `};
  ${({ axis, size }) =>
  axis === 'vertical' &&
  css`
      height: ${size}px;
    `};
`;

const Spacer: FC<Props> = ({ axis, size }) => <Base axis={axis} size={size} />;

export default Spacer;
