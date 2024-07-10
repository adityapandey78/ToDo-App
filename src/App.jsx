import React from 'react'
import { useState } from 'react'
import {Todo}  from './Todo/Todo'

function App() {
  const [count, setCount] = useState("")

  return (
    <>
      <section>
        {<Todo/>}
      </section>
    </>
  )
}

export default App
