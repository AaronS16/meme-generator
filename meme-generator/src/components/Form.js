import memesData from "../memesData";


const Form = () => {
  const handleClick = () => {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url
    console.log(url)
  }

  return (
    <main>
      <div className='input-forms'>
        <input className="form-text" type="text" placeholder="Top Text"></input>
        <input className="form-text" type="text" placeholder="Bottom Text"></input>
        <button onClick={handleClick} className='form-button'>Get a new meme image 🖼</button>
      </div>
    </main>
  )
}



export default Form
