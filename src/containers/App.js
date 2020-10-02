import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from '../robots';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
        //this.setState({robots: robots})
        //console.log('check');
      }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter (robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })        
        //console.log(filteredRobots);
        return !robots.length ? //if lenght return 0
            <h1>Loading 1000 years...</h1> :
            (   //else return below
                <div className = 'tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots} /> 
                        </ErrorBoundary>
                    </Scroll>
                </div>        
            )            
    }    
}

export default App;
