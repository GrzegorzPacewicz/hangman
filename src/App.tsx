import { useState } from 'react';
import words from "./components/wordList.json"

function App() {
 const [wordToGuess, setWordToGuess] = useState(() =>{
     return words[Math.floor(Math.random() * words.length)]
    })

    console.log(wordToGuess);

  return (
    <div>
      Hello world!
    </div>
  )
}

export default App
