import React from 'react'
import { Snow } from './components/snow'
import words from './words.json'

export function App() {
  console.log(words)

  return (
    <div>
      <header>
        <Snow />
        <h1>Do You Want To Build A Snowman?</h1>
      </header>
    </div>
  )
}
