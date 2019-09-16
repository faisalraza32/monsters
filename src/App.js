import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchInput: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }
  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  }
  render() {
    const { monsters, searchInput } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchInput.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList data={filteredMonsters} />
      </div>
    );
  };
};

export default App;

//git remote add origin git@github.com:faisalraza32/monsters.git
//yarn add gh-pages
// yarn 
/*
Your identification has been saved in /Users/newuser/.ssh/id_rsa.
Your public key has been saved in /Users/newuser/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MkbPGuryAq6lq6TLaf/jkaqt9nfTQ37lgAI9gEraE2o faisalraza32@gmail.com
The key's randomart image is:
+---[RSA 4096]----+
|    .            |
| ... .           |
|oo..  +          |
|oEo  o =         |
|.  .  * S .      |
|.    o.* o . .   |
|.o. .o. =   +    |
|+*=..o.o + . .   |
|%B=O*oo . o      |
+----[SHA256]-----+
*/