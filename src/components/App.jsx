import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    request: '',
  }

addRequest = newReuqest => {
  this.setState({
    request: newReuqest,
  })
}

  render(){
    return(
<Searchbar onSubmit={this.addRequest}/>
    )
  }
}

export default App