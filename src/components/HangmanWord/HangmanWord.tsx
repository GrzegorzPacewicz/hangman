import React from 'react';
import {Container, HiddenLetter, Letter} from "./styled";

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

const HangmanWord = ({guessedLetters, wordToGuess, reveal = false }:HangmanWordProps) => {

    return (
        <Container>
            {wordToGuess.split("").map((letter, index) => (
                <Letter key={index}>
                    <span style={{
                        visibility: guessedLetters.includes(letter) || reveal
                            ? "visible"
                            : "hidden",
                            color: !guessedLetters.includes(letter) && reveal ?"red" : "hsl(200, 100%, 50%)"
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