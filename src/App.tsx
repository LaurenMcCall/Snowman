import React, { useState } from 'react'
import { Snow } from './components/snow'
import words from './words.json'
// Make a component
import step0 from '/images/step_0.png'
import step1 from '/images/step_1.png'
import step2 from '/images/step_2.png'
import step3 from '/images/step_3.png'
import step4 from '/images/step_4.png'
import step5 from '/images/step_5.png'
import step6 from '/images/step_6.png'
import step7 from '/images/step_7.png'

export function App() {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  // gets a random word from json file
  const randomWord = words[Math.floor(Math.random() * words.length)]

  // set the secret word to be the random word pulled from the json file
  const [secretWord, setSecretWord] = useState(randomWord.toUpperCase())
  const [currentWord, setCurrentWord] = useState('_______')
  const [guessedLetters, setGuessedLetters] = useState([''])
  const [numberOfCorrectLettersGuessed, setNumberOfCorrectLettersGuessed] =
    useState(0)
  console.log(secretWord)

  async function HandleNewGame() {
    setSecretWord(randomWord.toUpperCase())
    setCurrentWord('_______')
    setGuessedLetters([''])
    setNumberOfCorrectLettersGuessed(0)
    displayWinnerMessage!.innerHTML = 'Do You Want To Build A Snowman?'
  }

  function handleClickLetter(letter: string) {
    // const newValueForGuessedLetters = `${guessedLetters} ${letter}`
    setGuessedLetters([...guessedLetters, letter])

    if (secretWord.includes(letter)) {
      setNumberOfCorrectLettersGuessed(numberOfCorrectLettersGuessed + 1)
      console.log(setNumberOfCorrectLettersGuessed)
      let newCurrentWord = ''
      // QUESTION:

      /* if true, then the for loop runs -- index equals 0, if index is less than
      the length of the word, plus one to the index to successfully loop over the entire word. 

      if current index of the word matches the letter, replace the newCurrentWord with that letter at that index. ELSE, continue looping through word and if letter does not match next index, replace newCurrentWord with '_' (which is the state of currentWord). do this until index >= length of word. 

      set the new state of currentWord with the newCurrentWord.
      */

      for (let index = 0; index < secretWord.length; index++) {
        if (secretWord[index] === letter) {
          newCurrentWord = newCurrentWord.concat(letter)
        } else {
          newCurrentWord = newCurrentWord.concat(currentWord[index])
        }
      }
      setCurrentWord(newCurrentWord)
    }
    console.log(currentWord)
  }

  let result = ''
  const displayWinnerMessage = document.querySelector('header h1')

  function snowmanPictures() {
    switch (numberOfCorrectLettersGuessed) {
      case 0:
        return step0
      case 1:
        return step1
      case 2:
        return step2
      case 3:
        return step3
      case 4:
        return step4
      case 5:
        return step5
      case 6:
        return step6
      case 7:
        result = 'You did it! Click New Game to build another one!'
        displayWinnerMessage!.innerHTML = result
        console.log(displayWinnerMessage)
        return step7
    }
  }

  return (
    <div>
      <Snow />
      <header>
        <h1 className={snowmanPictures() === step7 ? 'blink-me' : ''}>
          Do You Want To Build A Snowman?
        </h1>
      </header>
      <main>
        <div>
          <img
            className="border"
            src={snowmanPictures()}
            alt="snowman"
            width="300"
            height="350"
          />
        </div>
        <ul>
          <li>{currentWord}</li>
        </ul>
        <div>
          Your guessed letters are: <br />
          {guessedLetters}
        </div>

        <section>
          {alphabet.map(function (letter) {
            return (
              <button
                className="border"
                key={letter}
                onClick={function () {
                  handleClickLetter(letter)
                }}
                disabled={guessedLetters.includes(letter)}
              >
                {letter.toUpperCase()}
              </button>
            )
          })}
        </section>
        <div>
          <button className="border " onClick={HandleNewGame}>
            New Game
          </button>
        </div>
      </main>
      <footer>☃️ Built by Lauren McCall ☃️ </footer>
    </div>
  )
}
