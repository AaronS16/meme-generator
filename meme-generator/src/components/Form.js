const Form = () => {
  const handleClick = () => {
    console.log('Clickety click')
  }
  return (
    <main>
      <form className='input-forms'>
        <input className="form-text" type="text" placeholder="Top Text"></input>
        <input className="form-text" type="text" placeholder="Bottom Text"></input>
        <button onClick={handleClick} className='form-button'>Get a new meme image 🖼</button>
      </form>
    </main>
  )
}

export default Form
