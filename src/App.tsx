import React, { useState } from 'react'
import { Snow } from './components/snow'
import words from './words.json'
import step0 from '/images/step_0.png'

export function App() {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  // using string, not array
  const [guessedLetters, setGuessedLetters] = useState('')

  // gets a random word from json file
  const randomWord = words[Math.floor(Math.random() * words.length)]
  console.log(randomWord)

  // const [secretWord, setSecretWord] = useState(words[0])
  // console.log(secretWord)

  function handleClickLetter(letter: string) {
    const newValueForGuessedLetters = `${guessedLetters} ${letter}`
    setGuessedLetters(newValueForGuessedLetters)
  }

  // const buttons = alphabet.map((letter) => letter)
  return (
    <div>
      <Snow />
      <header>
        <h1>Do You Want To Build A Snowman?</h1>
      </header>
      <main>
        <div>
          <img
            src={step0}
            alt="snow ground for the snowman"
            width="300"
            height="350"
          />
        </div>
        <ul>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
        </ul>
        <div>Your guessed letters are: {guessedLetters}</div>

        <section>
          {alphabet.map(function (letter) {
            return (
              <button
                key={letter}
                onClick={function () {
                  handleClickLetter(letter)
                }}
                disabled={guessedLetters.includes(letter)}
              >
                {letter}
              </button>
            )
          })}
        </section>
      </main>
    </div>
  )
}
