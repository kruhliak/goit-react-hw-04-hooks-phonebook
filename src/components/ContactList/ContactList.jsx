import { List } from './ContactList.styles';

function ContactList({ contactsData, onDeleteContact }) {
  return (
    <List>
      {contactsData.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Удалить
          </button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
