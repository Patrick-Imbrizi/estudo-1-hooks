import './App.css';
import Fact from './components/Fact';
import React from 'react';


function App() {
  const [fact, setFact] = React.useState([]);

  const [prevFacts, setPrevFacts] = React.useState([]);

  const [loading, setLoading] = React.useState(false)

  async function generateFact() {
    try {
      setLoading(true)
      const res = await fetch(`https://uselessfacts.jsph.pl/random.json?language=en`);
      const json = await res.json();
      setLoading(false)
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

  function loadingStatus() {
    if (loading === false && fact.length !== 0) {
      return (<Fact randomFact={fact} />)
    } else if (loading === false && fact.length === 0) {
      return (<p><em>Click below to start generating facts.</em></p>)
    } else {
      return (<p><em>Loading...</em></p>)

    }

  }

  return (
    <div className="App">
      <h1>Random useless - but real! - facts generator.</h1>
      {loadingStatus()}
      <div className='btn-wrap'>
        <button disabled={loading === true} onClick={generateFact}>Generate</button>
        <button disabled={prevFacts[0] === undefined || prevFacts.at(-1) === fact || loading === true}
          onClick={handlePreviousFact}>
          Previous Fact
        </button>
      </div>
    </div >
  )
}

export default App;
