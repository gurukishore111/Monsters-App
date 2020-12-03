import React, { Component } from 'react'
import './App.css';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:""
    }
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
   //https://jsonplaceholder.typicode.com/users
   fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(result => this.setState({monsters : result}))
   }

   handleChange =(e)=>{
    this.setState({searchField:e.target.value }) 
   }
  render() {
   const {monsters,searchField}  = this.state;
   const filteredMonsters = monsters.filter(monster =>{
    return monster.name.toLowerCase().includes(searchField.toLowerCase())
   })
    return (
      <div className="App">
        <h1>Monsters App</h1>
        <SearchBox 
        handleChange={e =>this.handleChange(e)}
        placeholder="search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}


export default App;