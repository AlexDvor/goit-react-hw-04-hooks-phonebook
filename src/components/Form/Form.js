// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import ButtonItem from '../Button';
import PropTypes from 'prop-types';
// style
import { FormItem, Input } from './Form.styled.jsx';

export default function Form({ getData }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const randomId = uuidv4().slice(0, 5);

    setId(randomId);

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactData = {
      name: name,
      id: id,
      number: number,
    };
    getData(contactData);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setId('');
    setNumber('');
  };

  return (
    <>
      <div>
        <FormItem onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Name"
          />
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Phone number"
          />
          <ButtonItem text="Add contact" />
        </FormItem>
      </div>
    </>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func,
  getData: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func,
};
