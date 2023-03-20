import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${({ name }) => {
    switch (name) {
      case 'good':
        return '#43a047';
      case 'neutral':
        return '#bdbdbd';
      case 'bad':
        return '#e53935';
      default:
        return 'none';
    }
  }};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
