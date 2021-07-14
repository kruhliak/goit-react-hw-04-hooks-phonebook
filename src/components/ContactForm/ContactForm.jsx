import { useState } from 'react';
import { Form } from './ContactForm.styles';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setsNumber] = useState('');

  const handleChangeForm = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setsNumber(value);

      default:
        console.log('default');
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(name, number);

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setsNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChangeForm}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={handleChangeForm}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            autoComplete="off"
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </div>
  );
}
