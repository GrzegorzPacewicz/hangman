import React from 'react';
import {Container, HiddenLetter, Letter} from "./styled";

const HangmanWord = () => {

    const word = "test"
    const guessedLetters = ["e", "g", "s"]

    return (
        <Container>
            {word.split("").map((letter, index) => (
                <Letter key={index}>
                    <HiddenLetter style={{
                        visibility: guessedLetters.includes(letter)
                            ? "visible"
                            : "hidden"
                    }}
                    >
                        {letter}
                    </HiddenLetter>
                </Letter>
            ))}
        </Container>
    );
};

export default HangmanWord;