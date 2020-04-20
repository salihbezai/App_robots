import React,{ Component } from 'react';
import CardList from '../Component/CardList';
import SearchBox from '../Component/SearchBOX';
import scroll from '../Component/scroll';
import './App.css';


class App extends Component{

constructor(){
	super()
	this.state={
		robots:[],
		searchfield:''
	}

}

onsearchChange=(event)=>{

    this.setState({searchfield:event.target.value});


}


componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>this.setState({robots:users}));
}



render() {
	const {robots,searchfield}=this.state;
	
		const filteredRobots=robots.filter(robot =>{
   return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		return !robots.length ?  

		 <h2 className='tc'>Loading...</h2>:
		(

  <div className='tc'>
  <h1>robots friend</h1>
  <SearchBox searchChange={this.onsearchChange} />
  <scroll>
  <CardList robots={filteredRobots} />
  </scroll>
  </div>

);
		


}

}

export default App;
