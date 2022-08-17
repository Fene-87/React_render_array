import './App.css';
import Joke from './components/joke';
import { jokes } from './components/jokesData'


function App() {
  const newJokes = jokes.map((joke) => {
    return <Joke 
             setup={joke.setup}
             punchline={joke.punchline}
           />  
  })
  return (
    <div className="App">
      {newJokes}
    </div>
  );
}

export default App;
