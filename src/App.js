import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox} from './components/search-box/search-box.component'


class App extends Component {
  //Calls it to be able to set the state value to a string
  //Also gives you set state 
  constructor(){
    super();
    this.state = {
      //Keep it as empty until you mount the api call to the JSON
      monsters: [],
      searchField: ''
    };
  }

  //Life cycle lexical scoping
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users}));
  }
  
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    //Filter the monsters 
    const { monsters, searchField} = this.state; //Where we want to destruct 
    
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
      
        <CardList monsters={filteredMonsters}></CardList>  
     
      </div>
    );
  }
}

export default App;
