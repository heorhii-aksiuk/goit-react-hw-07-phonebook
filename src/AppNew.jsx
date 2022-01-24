import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/contacts/slice';

import {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from './store/contactsApi';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';

export default function App() {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [addContact] = useAddContactMutation();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function handleFilter(e) {
    dispatch(actions.setFilter(e.target.value));
  }

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmitContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilter} />
        {contacts && (
          <Contacts contacts={filteredContacts} onDeleteClick={deleteContact} />
        )}
      </Section>
    </>
  );
}
