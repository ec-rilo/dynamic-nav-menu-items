import styled from 'styled-components';

const TextAnimateLi = styled.li`
  color: white;
  transition: color 0.2s;
  cursor: pointer;
  ${({ content, index }) => {
    if (content[index].isActive === false) {
      return `
      color: rgba(255, 255, 255, 0.5);  
    `;
    }
  }}
`;

export default TextAnimateLi;
