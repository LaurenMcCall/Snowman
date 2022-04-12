import React, { useState } from 'react'
import { Snow } from './components/snow'
import words from './words.json'
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
  // QUESTION: How to make _______ have separation between characters on webpage?
  const [currentWord, setCurrentWord] = useState('_______')
  const [guessedLetters, setGuessedLetters] = useState([''])
  const [numberOfCorrectLettersGuessed, setNumberOfCorrectLettersGuessed] =
    useState(0)
  console.log(secretWord)

  const displayWinnerMessage = document.querySelector('header h1')

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
      for (let index = 0; index < secretWord.length; index++) {
        if (secretWord[index] === letter) {
          newCurrentWord = newCurrentWord.concat(letter)
        } else {
          newCurrentWord = newCurrentWord.concat(currentWord[index])
        }
      }
      setCurrentWord(newCurrentWord)
    }
  }

  let result: string

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
        result = 'You won!'
        displayWinnerMessage!.innerHTML = result
        console.log(displayWinnerMessage)
        return step7
    }
  }

  return (
    <div>
      <Snow />
      <header>
        <h1>Do You Want To Build A Snowman?</h1>
      </header>
      <main>
        <div>
          <img
            className="border"
            src={snowmanPictures()}
            alt="snow ground for the snowman"
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
          <button className="border" onClick={HandleNewGame}>
            New Game
          </button>
        </div>
      </main>
    </div>
  )
}
