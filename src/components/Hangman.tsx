import {useCallback, useEffect, useState} from 'react';
import {KeyboardContainer, Text, Wrapper} from "../styled"
import words from "./wordList.json"
import HangmanDrawing from "./HangmanDrawing/HangmanDrawing";
import HangmanWord from "./HangmanWord/HangmanWord";
import Keyboard from "./Keyboard/Keyboard";

function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function Hangman() {

    const [wordToGuess, setWordToGuess] = useState(getWord)

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter))

    const isLoser = incorrectLetters.length >= 7
    const isWinner = wordToGuess.split("").every(letter =>
        guessedLetters.includes(letter)
    )

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isLoser || isWinner) return

        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isWinner, isLoser])

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key

            if (!key.match(/^[a-z]$/)) return
            event.preventDefault()
            addGuessedLetter(key)
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters])

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key
            if (key !== "Enter") return

            event.preventDefault()
            setGuessedLetters([])
            setWordToGuess(getWord())
        }

        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [])

return (
    <Wrapper>
        <Text>
            {isWinner && "Winner - Refresh to try again!"}
            {isLoser && "Nice try - Refresh to try again!"}
        </Text>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
        <HangmanWord
            reveal={isLoser}
            guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
        <KeyboardContainer>
            <Keyboard
                disabled={isWinner || isLoser}
                activeLetters={guessedLetters.filter(letter =>
                    wordToGuess.includes(letter))}
                inactiveLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetter}

            />
            </KeyboardContainer>
        </Wrapper>
    )
}

export default Hangman
