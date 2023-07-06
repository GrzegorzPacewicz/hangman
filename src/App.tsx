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

    return (
        <Wrapper>
            <Text>
                Lose Win
            </Text>
            <HangmanDrawing/>
            <HangmanWord/>
            <KeyboardContainer>
                <Keyboard/>
            </KeyboardContainer>
        </Wrapper>
    )
}

export default App
