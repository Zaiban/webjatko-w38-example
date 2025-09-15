import { useState } from 'react'
import './NewSongForm.css';

const NewSongForm = () => { 
 const [enteredSong, setEnteredSong] = useState(''); //Initial value is empty

 const songChangeHandler = (event) => {
    console.log('Text changed!');
    setEnteredSong(event.target.value);
  }

  return (
    <form className="new-song__form">
      <label className="new-song__label">Name:</label>
      <input className="new-song__name" onChange={songChangeHandler} value={enteredSong} type="text" />
      <button className="new-song__button" type="submit">➕ Add</button>
    </form>
  );
}

export default NewSongForm;