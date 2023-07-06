import {useState} from 'react';
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

    return (
        <Wrapper>
            <Text>
                Lose Win
            </Text>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord/>
            <KeyboardContainer>
                <Keyboard/>
            </KeyboardContainer>
        </Wrapper>
    )
}

export default App
