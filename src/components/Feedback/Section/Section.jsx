import { PropTypes } from 'prop-types';
import { StyledSection } from './Section.styled';

export const Section = ({ title }) => {
  return (
    <StyledSection>
      <h1>{title}</h1>
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
