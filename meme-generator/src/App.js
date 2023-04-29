import Header from './components/Header';
import Form from './components/Form';
import React from 'react';
import './index.css';

function App() {
  const [things, setThings] = React.useState(['Thing 1', "Thing 2"]),
      handleClick = () => {
        const newText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newText])
      },
      test = things.map((thing, index) =>
        <p key={index}>{thing}</p>
      )
  return (
    <div className="">
      <Header />
      <Form />
      <button onClick={handleClick}>Add Item</button>
      {test}
    </div>
  );
}

export default App;
