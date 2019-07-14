import React, {Component} from 'react';
import logo from './../logo.svg';
import './../App.css';

import Contacts from './Contacts';

class App extends Component {

  state = {
    contacts: [{
      name: 'Mehmet',
      phone: '121212121'
    }, {
      name: 'Mesut',
      phone: '98788787'
    }]
  };
  render() {
    return (<div className="App" >
      <Contacts contacts={this.state.contacts} /> </div>
    );
  }
}
export default App;