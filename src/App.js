import './App.css';
import Fact from './components/Fact';
import React from 'react';


function App() {
  const [fact, setFact] = React.useState([]);

  const [prevFacts, setPrevFacts] = React.useState([]);

  async function generateFact() {
    try {
      const res = await fetch(`https://uselessfacts.jsph.pl/random.json?language=en`);
      const json = await res.json();
      setFact(json);
      setPrevFacts([...prevFacts, fact])
    } catch (err) {
      console.log(err.message);
    }
  }

  function handlePreviousFact() {
    setFact(prevFacts.at(-1))
    setPrevFacts(prevFacts.slice(0, -1))
  }

  return (
    <div className="App">
      <h1>Random useless - but real! - facts generator.</h1>
      {fact.length !== 0 ? <Fact randomFact={fact} /> : <p>Click below to start generating facts.</p>}
      <div className='btn-wrap'>
        <button onClick={generateFact}>Generate</button>
        <button disabled={prevFacts[0] === undefined || prevFacts.at(-1) === fact}
          onClick={handlePreviousFact}>
          Previous Fact
        </button>
      </div>
    </div >
  );
}

export default App;
