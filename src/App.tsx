import {useState} from 'react';
import {Text, Wrapper} from "./styled"
import words from "./components/wordList.json"
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keybord from "./components/Keybord";

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
            <Keybord/>
        </Wrapper>
    )
}

export default App
