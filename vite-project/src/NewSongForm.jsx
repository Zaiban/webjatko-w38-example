import { useState } from 'react'
import './NewSongForm.css';

const NewSongForm = (props) => {
    const { handleUpdateSongInfo } = props;

    const [userInput, setUserInput] = useState(
        {
            enteredSong: '',
            enteredArtist: ''
        }
    );

    const submitHandler = (event) => {
        // Prevent the default refresh functionality in the browser
        event.preventDefault();

        // Get the current values for the input fields
        const { enteredArtist, enteredSong } = userInput;

        // Update the song info in the parent component
        handleUpdateSongInfo(enteredArtist + " - " + enteredSong)

        // Empty the input fields
        setUserInput({
            enteredSong: '',
            enteredArtist: ''
        })
    };

    const songChangeHandler = (event) => {
        console.log('Text changed!');

        setUserInput({
            ...userInput,
            enteredSong: event.target.value
        });
    }

    const artistChangeHandler = (event) => {
        console.log('Text changed!');

        setUserInput({
            ...userInput,
            enteredArtist: event.target.value
        });
    }

    return (
        <form className="new-song__form" onSubmit={submitHandler}>
            <label className="new-song__label">Name:</label>
            <input className="new-song__name" onChange={songChangeHandler} value={userInput.enteredSong} type="text" />
            <label className="new-artist__label">Artist: </label>
            <input className="new-artist__name" onChange={artistChangeHandler} value={userInput.enteredArtist} type="text" />
            <button className="new-song__button" type="submit">➕ Add</button>
        </form>
    );
}

export default NewSongForm;