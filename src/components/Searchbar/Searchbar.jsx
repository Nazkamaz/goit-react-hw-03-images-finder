import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component{
static propTypes = {onSubmit: PropTypes.func.isRequired};

state = {request: ''};

handleChange = e => {
    this.setState({request: e.currentTarget.value})
    console.log("зміни перезаписані в стейт")
}

handleSubmit = e =>{
    e.preventDefault();
    const { request } = this.state;
    this.props.onSubmit(request.toLowerCase());
}

    render(){
        return(
            <header >
  <form onSubmit={this.handleSubmit}>
    <button type="submit" >
      <span>Search</span>
    </button>

    <input
      name='request'
      type="text"
      onChange={this.handleChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}

export default Searchbar