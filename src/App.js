import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Rubel', 'Sakib','Tamim', 'Mahamudullah','Ronaldo' ]
  const sportsman =[
    {name:'Rubel', profession:'Bowler'},
    {name:'Sakib', profession:'Allrounder'},
    {name:'Tamim', profession:'Batsman'},
    {name:'Mahamudullah', profession:'Captain'},
    {name:'Ronaldo', profession:'Footbaler'},
    {name:'Messi', profession:'Footbal'}
  ]
  return (
    <div className="App">
      <a href="https://www.google.com/">googe</a>
      <p>titale</p>
      <ul>
        {
          players.map(player => <li>{player}</li>)
        }
      </ul>
      sportsman.map(sportman => <Person></Person>)
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
