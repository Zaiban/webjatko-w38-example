import { useState } from 'react'
import './App.css'
import NewSongForm from './NewSongForm';

function App() {
  const [feedback, setFeedback] = useState('Player is ready!');

  const clickPlay = () => {
    console.log('Now playing...');
    setFeedback('Now playing ...');
  };
  const clickStop = () => {
    console.log('Stopped!');
    setFeedback('Stopped!');
  };

  return (
    <>
      <h1>React State & Working with Events</h1>
      <button onClick={ () => clickPlay() }>⏯️ Play</button>
      <button onClick={ () => clickStop() }>⏹️ Stop</button>
      <h4>{feedback}</h4>
      <NewSongForm />
    </>
  )
}

export default App
