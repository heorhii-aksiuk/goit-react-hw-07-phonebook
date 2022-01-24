import {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from './store/contactsApi';
import Section from './components/Section/Section';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';

export default function App() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [addContact] = useAddContactMutation();

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmitContact={addContact} />
      </Section>
      <Section title="Contacts">
        {isFetching && <h2>Loading...</h2>}
        {contacts && (
          <Contacts contacts={contacts} onDeleteClick={deleteContact} />
        )}
      </Section>
    </>
  );
}
