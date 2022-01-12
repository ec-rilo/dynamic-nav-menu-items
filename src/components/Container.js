import styled from 'styled-components';
import useTextAnimate from '../utils/hooks/useTextAnimate';
import TextAnimateLi from './TextAnimateLi';

const Container = ({ className }) => {
  const data = useTextAnimate([
    { name: 'work', isActive: true },
    { name: 'about', isActive: true },
    { name: 'contact', isActive: true },
    { name: 'cv', isActive: true },
  ]);

  return (
    <ul className={className}>
      {data.content.map((item, index) => {
        return (
          <TextAnimateLi
            key={index}
            onMouseEnter={() => data.setOneActive(item.name)}
            onMouseLeave={() => data.setAllActive()}
            content={data.content}
            index={index}
          >
            {item.name}
          </TextAnimateLi>
        );
      })}
    </ul>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: black;
  color: white;
  font-family: var(--fnt-regular);
`;

export default StyledContainer;
