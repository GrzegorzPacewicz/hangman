import React from 'react';
import {Keys} from "./Keys";
import {Container} from "./styled";
import styles from "./Keyboard.module.css"

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) => {
    return (
        <Container>
            {Keys.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} ${isActive ? styles.active : ""}
                         ${isInactive ? styles.inactive : ""
                        }`}
                        key={key}
                    >
                        {key}
                    </button>
                )
            })}
        </Container>
    );
};

export default Keyboard;