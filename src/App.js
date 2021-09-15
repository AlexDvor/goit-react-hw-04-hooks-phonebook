import { Container } from './components/Container/Container';
import { useState } from 'react';
import Form from './components/Form';
import Contact from './components/Contact';
import Filter from './components/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const localStor = localStorage.getItem("contacts");
  //   const parseLocalStor = JSON.parse(localStor);
  //   if (parseLocalStor) {
  //     this.setState({
  //       contacts: parseLocalStor,
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  const getData = data => {
    const newContacts = {
      name: data.name,
      id: data.id,
      number: data.number,
    };
    updateContacts(newContacts);
  };

  const updateContacts = newData => {
    console.log(contacts);
    contacts.some(item => item.name === newData.name)
      ? alert(`${newData.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newData]);
  };

  const handleFilterByName = e => {
    setFilter(e.target.value);
  };

  const renderListName = (array, name) => {
    return array.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  };

  const deleteNameItem = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form getData={getData} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterByName} />
      <Contact data={renderListName(contacts, filter)} onDeleteNameItem={deleteNameItem}></Contact>
    </Container>
  );
}
