import './App.css';
import Fact from './components/Fact';
import React, { useEffect } from 'react';


function App() {
  const [fact, setFact] = React.useState([]);

  const [prevFacts, setPrevFacts] = React.useState([]);




  async function generateFact() {
    const showFact = await fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)
      .then(response => response.json())
      .then(json => setFact(json));
    setPrevFacts([fact.text])
  }




  console.log(fact)

  return (
    <div className="App">
      <h1>Random useless - but real! - facts generator.</h1>
      {fact.length !== 0 ? <Fact randomFact={fact} /> : <p>Click below to start generating facts.</p>}
      <div className='btn-wrap'>
        <button onClick={generateFact}>Generate</button>
        <button disabled={prevFacts[0] === undefined}
          onClick={() => setFact(prevFacts)}>
          Previous Fact
        </button>
      </div>
    </div >
  );
}

export default App;
