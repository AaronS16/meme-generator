import React from 'react';
import memesData from "../memesData";


const Form = () => {

  const [memeImage, setMemeImage] = React.useState("")

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url
    console.log(url)
    setMemeImage(url)
  }

  

  return (
    <main>
      <div className='input-forms'>
        <input className="form-text" type="text" placeholder="Top Text"></input>
        <input className="form-text" type="text" placeholder="Bottom Text"></input>
        <button onClick={getMemeImage} className='form-button'>Get a new meme image 🖼</button>
      </div>
      <img className='meme-pic' src={memeImage}></img>
    </main>
  )
}



export default Form
