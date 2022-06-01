// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).

  const inputRef = React.useRef();
  // const [currentInput, setCurrentInput] = React.useState('');
  const [username, setUsername] = React.useState();
  // const [isValid, setIsValid] = React.useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    // const username = event.target.elements[0].value;
    const username = inputRef.current.value;
    return onSubmitUsername(username);
  }
  function onChange(event) {
    event.preventDefault();
    // const inputValue = inputRef.current.value;
    // if (inputValue.toLowerCase() === inputValue) {
    //   setIsValid(true);
    // } else setIsValid(false);
    // setCurrentInput(inputValue);

    const lowerCaseInput = inputRef.current.value.toLowerCase();
    setUsername(lowerCaseInput)

  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input ref={inputRef} id='username' type="text" value={username} onChange={onChange}/>
      </div>
      {/* {!isValid && <div style={{color: 'red'}}>Username must be lower case</div>}
      <button type="submit" disabled={!isValid}>Submit</button> */}
      <button type="submit" >Submit</button>

    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
