import ContactList from "./ContactList";
import PropTypes from "prop-types";

function Contact({ data, onDeleteNameItem }) {
  return (
    <>
      <ul>
        <ContactList
          data={data}
          onDeleteNameItem={onDeleteNameItem}
        ></ContactList>
      </ul>
    </>
  );
}

Contact.propTypes = {
  data: PropTypes.array,
  onDeleteNameItem: PropTypes.func,
};

export default Contact;
