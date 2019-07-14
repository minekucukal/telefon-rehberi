import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

import Contacts from './Contacts';

class App extends Component {

  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [{
      name: 'Öner',
      phone: '121212121'
    }, {
      name: 'Bilgihan',
      phone: '98788787'
    }]
  };

  addContact(contact) {
    const {contacts} = this.state;
    contacts.push(contact);
    this.setState({
      contacts
    });
  }
  render() {
    return (<div className="App" >
      <Contacts 
      addContact={this.addContact}
      contacts={this.state.contacts} /> </div>
    );
  }
}
export default App;