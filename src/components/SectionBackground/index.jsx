import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <SectionContainer>
      <Styled.Container background={background}>{children}</Styled.Container>
    </SectionContainer>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
