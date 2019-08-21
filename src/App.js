import React from 'react';

import './App.css';
import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component'

class App extends React.Component {
    // PLAN--
    //  - Fetch cardList array after componentDidMount, to make sure we have thing to mount to.
    //  - SearchBox Functionality-- define eventHandler for handling onChange, capture input value and filter cardList.


    constructor() {
        super();
        this.state = {
            'cardList': []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(userArray => this.setState({'cardList': userArray}))
            .catch(err => console.log(err.message));
    }

    render() {
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox />
                <CardList cardList={this.state.cardList} />
            </div>
        );
    }
}




export default App;
