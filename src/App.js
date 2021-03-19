import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const nayoks = ['Jashim', 'Zihad', 'Deepjol', 'Bapparaj', 'Omar Sani'];
  // const nayoks = [
  //   {name: 'Bobita', age: 55},
  //   {name: 'Sabana', age: 56},
  //   {name: 'Sabnur', age: 63},
  //   {name: 'Purnima', age: 45},
  //   {name: 'Akhi', age: 48},
  //  ];

  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])


  return (
    <div className="App">
        <MovieCounter></MovieCounter>

        {
          nayoks.map(nk => <Nayok name={nk.name} key={nk.id} email={nk.email}></Nayok>)
        }
        
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Nayok name={nayoks[0].name}></Nayok>
        <Nayok name={nayoks[1].name}></Nayok>
        <Nayok name={nayoks[2].name}></Nayok> */}
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return(
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <h3>Number of Movies: {count}</h3>
      <MovieDisplay movies={count + 1}></MovieDisplay>
      <MovieDisplay movies={count + 2}></MovieDisplay>
      <MovieDisplay movies={count + 3}></MovieDisplay>
      <MovieDisplay movies={count + 4}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return(
    <div>
      <h3>Movies I have acted: {props.movies}</h3>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return(
    <div style={nayokStyle}>
      <h3>I am the hero.</h3>
      <h4>Hero name: {props.name}</h4>
      <h4>Email: {props.email}</h4>
    </div>
  )
}

export default App;
