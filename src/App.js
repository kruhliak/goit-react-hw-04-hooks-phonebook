import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    console.log(storageContacts);
    const parsedContacts = JSON.parse(storageContacts);
    console.log(parsedContacts);
    if (!parsedContacts) {
      return;
    }
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const handleSubmit = (name, number) => {
    const randomId = nanoid();
    const findContact = contacts.find(contact => contact.name.includes(name));

    findContact
      ? alert(`${name} is already in contacts`)
      : setContacts([...contacts, { id: randomId, name, number }]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  return (
    <div id="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleChangeFilter} />
      <ContactList
        contactsData={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

// export default class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// componentDidUpdate(_, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// handleChange = e => {
//   const { name, value } = e.currentTarget;
//   this.setState({ [name]: value });
// };

//   handleSubmit = (name, number) => {
//     const { contacts } = this.state;
//     const randomId = nanoid();
//     const findContact = contacts.find(contact => contact.name.includes(name));

//     findContact
//       ? alert(`${name} is already in contacts`)
//       : this.setState({
//           contacts: [...contacts, { id: randomId, name, number }],
//         });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(item =>
//       item.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

// return (
//   <div id="container">
//     <h1>Phonebook</h1>
//     <ContactForm onSubmit={this.handleSubmit} />
//     <h2>Contacts</h2>
//     <Filter filter={filter} onChange={this.handleChange} />
//     <ContactList
//       contactsData={visibleContacts}
//       onDeleteContact={this.deleteContact}
//     />
//   </div>
// );
//   }
// }
