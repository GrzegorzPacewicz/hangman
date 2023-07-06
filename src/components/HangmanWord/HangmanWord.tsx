import React from 'react';
import {Container, HiddenLetter, Letter} from "./styled";

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

const HangmanWord = ({guessedLetters, wordToGuess }:HangmanWordProps) => {

    return (
        <Container>
            {wordToGuess.split("").map((letter, index) => (
                <Letter key={index}>
                    <span style={{
                        visibility: guessedLetters.includes(letter)
                            ? "visible"
                            : "hidden"
                    }}
                    >
                        {letter}
                    </span>
                </Letter>
            ))}
        </Container>
    );
};

export default HangmanWord;