import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Rubel', 'Sakib','Tamim', 'Mahamudullah','Ronaldo' ]
  return (
    <div className="App">
      <a href="https://www.google.com/">googe</a>
      <p>titale</p>
      <ul>
        {
          players.map(player => <li>{player}</li>)
        }
      </ul>
      {players.map(player => <Person name={Person.name} profession={Person.skill}></Person>)}
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
