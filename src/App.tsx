import {useCallback, useEffect, useState} from 'react';
import {KeyboardContainer, Text, Wrapper} from "./styled"
import words from "./components/wordList.json"
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {

    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter))

    const isLoser = incorrectLetters.length >= 6
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

    return (
        <Wrapper>
            <Text>
                {isWinner && "Winner - Refresh to try again!"}
                {isLoser && "Nice try - Refresh to try again!"}
            </Text>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
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

export default App
