import { useState, useEffect } from 'react';
import personService from '../api/personService';
import Name from '../components/note';
import SearchFilter from '../components/searchfilter';
import PersonForm from '../components/personform';
import Notification from '../components/notification';
import './App.css';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(() => {
    personService 
    .getAll()
    .then(initialPersons =>{
       setPersons(initialPersons);
    });
  }, []); 

  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) (
     alert(`${newName} is already added to phonebook`)
    )

    const numberExists = persons.some(person => person.number === newNumber)
    if (numberExists) (
      alert(`${newNumber} is already added to phonebook`)
    )

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    
    personService
    .create(nameObject)
    .then(returnedPerson => { 
     setPersons(persons.concat(returnedPerson));
     setNewName('');
     setNewNumber('');
     showNotificationMessage('person added successfully');
    });
  };

  const showNotificationMessage = (message) => {
    setNotificationMessage(message)
    setTimeout(() => {
      setNotificationMessage('');
    }, 5000);
  };


  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange =(event)=> {
    setSearchTerm(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name && person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div>
      <h2>phonebook</h2>
      <Notification message={notificationMessage} />
      <div>
        <SearchFilter 
        searchTerm={searchTerm} 
        handleSearchChange={handleSearchChange} />
      </div>
      <h2>add a new</h2>
      <PersonForm 
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      addPerson={addPerson} />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => 
          <Name key={person.id} person={person} />
        )}
      </ul>
    </div>
  );
};

export default App;

