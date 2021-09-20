import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a href="https://www.google.com/">googe</a>
      <p>titale</p>
      <Person name='Rubel' skill='bowler'></Person>
      <Person name='sakib' skill='all Rounder'></Person>
      <Person name='Tamim' skill='batsman'></Person>
      <Person name='Mahamudullah' skill='Captain'></Person>
      <Person name='Ronaldo' skill='Footballer'></Person>
    </div>
  )
}
function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border:'3px solid lightgreen',
    margin: '30px',
    borderRadius: '10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Profession: {props.skill}</h4>
    </div>
  )
}

export default App;
