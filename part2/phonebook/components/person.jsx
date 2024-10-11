const Person = ({filteredPersons, Name}) => {
    return (
        <ul>
        {filteredPersons.map(person => 
          <Name key={person.id} person={person} />
        )}
      </ul>
    );
};

export default Person;