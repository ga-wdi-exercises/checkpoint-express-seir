import React, { Component } from 'react';
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList.js'
import NewContact from '../NewContact/NewContact.js'
import { Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: props.contacts
    };
  }

  handleSubmit() {
    this.setState(prevState => {
      //Logic to add NewContact info to the state arry here in App wth setState
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route 
          path='/' 
          render={(props) => (
            <ContactList contacts={this.state.contacts} {...props}/>
          )}
        />
        <Route 
          path='/new-contact'
          render={(props) => (
            <NewContact {...props} onSubmit={this.handleSubmit} />
          )}
        />
      </div>
    )
  }
}

export default App;