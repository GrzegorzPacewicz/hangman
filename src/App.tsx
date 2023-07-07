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

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter)) return

        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters])

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
                Lose Win
            </Text>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
            <KeyboardContainer>
                <Keyboard activeLetters={guessedLetters.filter(letter =>
                    wordToGuess.includes(letter))}
                          inactiveLetters={incorrectLetters}
                          addGuessedLetter={addGuessedLetter}
                 />
            </KeyboardContainer>
        </Wrapper>
    )
}

export default App
