import React from 'react';
import {Keys} from "./Keys";
import {Container, KeyButton} from "./styled";

const Keyboard = () => {
    return (
       <Container>
           {Keys.map(key =>{
               return(
                   <KeyButton key={key}>{key}</KeyButton>
               )
           })}
       </Container>
    );
};

export default Keyboard;