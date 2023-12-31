import styled, {css} from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: .5rem;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  width: 100%;
  aspect-ratio: 1/1;
  border: 3px solid white;
  background: none;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: .2rem;
  cursor: pointer;
  color: white;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: hsl(200, 100%, 75%);
  }
  `;

  // ${({disabled}) =>
  //     disabled && css`
  //           opacity: .3;
  //         `}
  //
  // ${({ active }) =>
  //         active && css`
  //           background-color: hsl(200, 100%, 50%);
  //           color: white;
  //         `}

