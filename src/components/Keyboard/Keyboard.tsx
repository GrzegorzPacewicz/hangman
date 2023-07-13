import React from 'react';
import {Keys} from "./Keys";
import {Container, StyledButton} from "./styled";
import styles from "./Keyboard.module.css"

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled: boolean
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {
    return (
        <Container>
            {Keys.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <StyledButton
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} ${isActive ? styles.active : ""}
                         ${isInactive ? styles.inactive : ""
                        }`}
                        disabled={isActive || isInactive || disabled
                    }
                        key={key}
                    >
                        {key}
                    </StyledButton>
                )
            })}
        </Container>
    );
};

export default Keyboard;