import { Button } from "./ContactList.styled";
import PropTypes from "prop-types";

function ContactList({ data, onDeleteNameItem }) {
  return (
    <>
      {data.map(({ name, id, number }) => (
        <li key={id}>
          {name} : {number}
          <Button onClick={() => onDeleteNameItem(id)}>Delete</Button>
        </li>
      ))}
    </>
  );
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
