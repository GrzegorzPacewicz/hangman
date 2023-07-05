import { useState } from 'react';
import {Wrapper} from "./styled"
import words from "./components/wordList.json"

function App() {

 const [wordToGuess, setWordToGuess] = useState(() =>{
     return words[Math.floor(Math.random() * words.length)]
    })

const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <Wrapper>
      Hello world!
    </Wrapper>
  )
}

export default App
