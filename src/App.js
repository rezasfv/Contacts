import React, { Component } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
// import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: '@karen_isgrigg',
        avatarURL: 'http://localhost:5001/karen.jpg'
      },
      {
        id: 'richard',
        name: 'Richard Kalehoff',
        handle: '@richardkalehoff',
        avatarURL: 'http://localhost:5001/richard.jpg'
      },
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: '@tylermcginnis',
        avatarURL: 'http://localhost:5001/tyler.jpg'
      }
    ]
  };

  // componentDidMount() {
  //   ContactsAPI.getAll()
  //     .then((contacts) => {
  //       this.setState({ contacts });
  //     })
  //     .catch(error => {
  //       console.error('Error fetching contacts:', error);
  //     });
  // }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id)
    }));

    // ContactsAPI.remove(contact).catch(error => {
    //   console.error('Error removing contact:', error);
    // });
  };

  createContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.concat([contact])
    }));
  };

  render() {
    return (
      <div>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <ListContacts
                contacts={this.state.contacts}
                onDeleteContact={this.removeContact}
              />
            }
          />
          <Route
            path='/create'
            element={
              <CreateContact
                onCreateContact={(contact) => {
                  this.createContact(contact);
                }}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
