import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: .5rem;
  align-items: stretch;
`;

export const KeyButton = styled.button`
  width: 100%;
  aspect-ratio: 1/1;
  border: 3px solid black;
  background: none;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: .5rem;
  cursor: pointer;
  color: black;
  
  &:hover:not(:disabled), 
  &:focus:not(:disabled) {
    background-color: hsl(200, 100%, 75%);    
  }
  .active {
    background-color: hsl(200, 100%, 50%);
    color: white;
  }
    .inactive {
    opacity: .3;
  }
`;